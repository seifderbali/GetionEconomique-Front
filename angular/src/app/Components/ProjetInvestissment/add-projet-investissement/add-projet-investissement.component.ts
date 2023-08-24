import { Component, OnInit } from '@angular/core';
import {EntiteSI} from "../../../Modules/EntiteSI";
import {EntiteSIService} from "../../../Services/EntiteSIService/entite-si.service";
import {ProjetInvestissment} from "../../../Modules/ProjetInvestissment";
import {ProjetInvestissmentService} from "../../../Services/ProjetInvestissmentService/projet-investissment.service";
import {Budget} from "../../../Modules/Budget";
import {BudgetService} from "../../../Services/BudgetService/budget.service";

@Component({
  selector: 'app-add-projet-investissement',
  templateUrl: './add-projet-investissement.component.html',
  styleUrls: ['./add-projet-investissement.component.scss']
})
export class AddProjetInvestissementComponent implements OnInit {
  projet: ProjetInvestissment = new ProjetInvestissment;
  budget: Budget = new Budget;
  projets: ProjetInvestissment []=[];

  sexe=['Male','Female'];
  role=['User','Manager','Admin'];
  selected: string='seif';
  entiteSIs:EntiteSI []=[];
  budgets:Budget []=[];

  entiteSI:EntiteSI =new EntiteSI;

  constructor(private projetService: ProjetInvestissmentService, private budgetService: BudgetService, private entiteSIService: EntiteSIService) { }

  ngOnInit(): void {
    this.projetService.findAll().subscribe(data => {
      this.projets = data;
    });
    this.entiteSIService.findAll().subscribe(data => {
      this.entiteSIs = data;
    });
  }
  onSubmit() {
      this.entiteSIService.findByName(this.selected).subscribe(dataa => {
        this.budgetService.addBudgetInvestissement(this.budget,dataa.id).subscribe(datas => {

          this.budgetService.displayBudgetInvestissements().subscribe(data => {
        this.budgets = data;
        this.projetService.save(this.projet,data[data.length-1].id).subscribe(result => this.ngOnInit());

      });
      });
    });
  }
}
