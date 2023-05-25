import { Component, OnInit } from '@angular/core';
import {EntiteSIService} from "../../../Services/EntiteSIService/entite-si.service";
import {EntiteSI} from "../../../Modules/EntiteSI";
import {Budget} from "../../../Modules/Budget";
import {BudgetService} from "../../../Services/BudgetService/budget.service";


@Component({
  selector: 'app-add-budget-maintenance',
  templateUrl: './add-budget-maintenance.component.html',
  styleUrls: ['./add-budget-maintenance.component.scss']
})
export class AddBudgetMaintenanceComponent implements OnInit {
  budget: Budget = new Budget;
  selected: string='seif';
  entiteSIs:EntiteSI []=[];
  budgets:Budget []=[];

  entiteSI:EntiteSI =new EntiteSI;

  constructor(private budgetService: BudgetService, private entiteSIService: EntiteSIService) { }

  ngOnInit(): void {
    this.entiteSIService.findAll().subscribe(data => {
      this.entiteSIs = data;
    });
  }
  onSubmit() {
    this.entiteSIService.findByName(this.selected).subscribe(dataa => {
      this.budgetService.addBudgetMaintenance(this.budget,dataa.id).subscribe(result => this.ngOnInit());

    });
  }
}
