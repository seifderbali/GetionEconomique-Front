import { Component, OnInit } from '@angular/core';
import {ComiteTechnique} from "../../../Modules/ComiteTechnique";
import {DateValidation} from "../../../Modules/DateValidation";
import {ComiteTechniqueService} from "../../../Services/ComiteTechniqueService/comite-technique.service";
import {DateValidationService} from "../../../Services/DateValidationService/date-validation.service";
import {Budget} from "../../../Modules/Budget";
import {BudgetService} from "../../../Services/BudgetService/budget.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-comite-technique',
  templateUrl: './add-comite-technique.component.html',
  styleUrls: ['./add-comite-technique.component.scss']
})
export class AddComiteTechniqueComponent implements OnInit {
  comite: ComiteTechnique = new ComiteTechnique;
  dateValidation: DateValidation = new DateValidation;
  dateValidations: DateValidation []=[];
  comites: ComiteTechnique []=[];
  budget: Budget = new Budget;
  budgets: Budget []=[];
  budgetMaintenances:Budget []=[];
  budgetMaintenance:Budget =new Budget;
  selected!: number;

  selectedOption!: string; // Declare the selectedOption variable


  constructor(private comiteService: ComiteTechniqueService, private dateValidationService: DateValidationService, private budgetService: BudgetService,private _Activatedroute:ActivatedRoute) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.selectedOption = String(params.get('selectedOption'));
    });
  }

  ngOnInit(): void {
    this.comiteService.findAll().subscribe(data => {
      this.comites = data;
    });
    this.budgetService.displayBudgetInvestissements().subscribe(data => {
      this.budgets = data;
    });
    this.budgetService.displayBudgetMaintenances().subscribe(data => {
      this.budgetMaintenances = data;
    });
  }
  onSubmit() {
    this.dateValidationService.save(this.dateValidation).subscribe(datas => {
        this.dateValidationService.findAll().subscribe(data => {
          this.dateValidations = data;
          this.comiteService.save(this.comite,data[data.length-1].id,this.selected).subscribe(result => this.ngOnInit());

        });
      });
  }
}
