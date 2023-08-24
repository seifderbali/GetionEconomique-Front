import { Component, OnInit } from '@angular/core';
import {ProjetInvestissment} from "../../Modules/ProjetInvestissment";
import {Fournisseur} from "../../Modules/Fournisseur";
import {Budget} from "../../Modules/Budget";
import {FournisseurService} from "../../Services/FournisseurService/fournisseur.service";
import {ProjetInvestissmentService} from "../../Services/ProjetInvestissmentService/projet-investissment.service";
import {BudgetService} from "../../Services/BudgetService/budget.service";

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent implements OnInit {
  projetInvestissments: ProjetInvestissment[]=[];
  fournisseurs: Fournisseur[]=[];
  budgetInvestissements: Budget[]=[];
  budgetMaintenances: Budget[]=[];
  constructor(private fournisseurService: FournisseurService, private projetInvestissmentService: ProjetInvestissmentService,private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.projetInvestissmentService.findAll().subscribe(data => {
      this.projetInvestissments = data;
    });
    this.fournisseurService.findAll().subscribe(data => {
      this.fournisseurs = data;
    });
    this.budgetService.displayBudgetInvestissements().subscribe(data => {
      this.budgetInvestissements = data;
    });
    this.budgetService.displayBudgetMaintenances().subscribe(data => {
      this.budgetMaintenances = data;
    });
  }

}
