import { Component, OnInit } from '@angular/core';
import {EntiteSI} from "../../../Modules/EntiteSI";
import {EntiteSIService} from "../../../Services/EntiteSIService/entite-si.service";
import {ProjetInvestissment} from "../../../Modules/ProjetInvestissment";
import {ProjetInvestissmentService} from "../../../Services/ProjetInvestissmentService/projet-investissment.service";
import {BudgetInvestissementService} from "../../../Services/BudgetInvestissementService/budget-investissement.service";
import {BudgetInvestissement} from "../../../Modules/BudgetInvestissement";

@Component({
  selector: 'app-add-projet-investissement',
  templateUrl: './add-projet-investissement.component.html',
  styleUrls: ['./add-projet-investissement.component.scss']
})
export class AddProjetInvestissementComponent implements OnInit {
  projet: ProjetInvestissment = new ProjetInvestissment;
  budget: BudgetInvestissement = new BudgetInvestissement;
  projets: ProjetInvestissment []=[];

  sexe=['Male','Female'];
  role=['User','Manager','Admin'];
  selected: string='seif';
  entiteSIs:EntiteSI []=[];
  budgets:BudgetInvestissement []=[];

  entiteSI:EntiteSI =new EntiteSI;

  constructor(private projetService: ProjetInvestissmentService, private budgetService: BudgetInvestissementService, private entiteSIService: EntiteSIService) { }

  ngOnInit(): void {
    this.projetService.findAll().subscribe(data => {
      this.projets = data;
    });
    this.entiteSIService.findAll().subscribe(data => {
      this.entiteSIs = data;
    });
  }
  onSubmit() {
    this.budgetService.save(this.budget).subscribe(datas => {
      this.entiteSIService.findByName(this.selected).subscribe(dataa => {
      this.budgetService.findAll().subscribe(data => {
        this.budgets = data;
        this.projetService.save(this.projet,dataa.id,data[data.length-1].id).subscribe(result => this.ngOnInit());

      });
      });
    });
  }
}
