import { Component, OnInit } from '@angular/core';
import {ContatDeMarche} from "../../../Modules/ContatDeMarche";
import {Fournisseur} from "../../../Modules/Fournisseur";
import {ContatDeMarcheService} from "../../../Services/ContatDeMarcheService/contat-de-marche.service";
import {FournisseurService} from "../../../Services/FournisseurService/fournisseur.service";
import {ActivatedRoute} from "@angular/router";
import {Budget} from "../../../Modules/Budget";
import {BudgetService} from "../../../Services/BudgetService/budget.service";


@Component({
  selector: 'app-add-contrat-de-marche',
  templateUrl: './add-contrat-de-marche.component.html',
  styleUrls: ['./add-contrat-de-marche.component.scss']
})
export class AddContratDeMarcheComponent implements OnInit {
  contrat: ContatDeMarche = new ContatDeMarche;
  contrats: ContatDeMarche[]=[];

  selected: string='seif';
  selectedd!: number;
  fournisseurs:Fournisseur []=[];
  fournisseur:Fournisseur =new Fournisseur;
  budgets:Budget []=[];
  budget:Budget =new Budget;
  budgetMaintenances:Budget []=[];
  budgetMaintenance:Budget =new Budget;
  selectedOption!: string; // Declare the selectedOption variable

  constructor(private contratDeMarcheService: ContatDeMarcheService, private fournisseurService: FournisseurService,private budgetService: BudgetService,private _Activatedroute:ActivatedRoute) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.selectedOption = String(params.get('selectedOption'));
    });
  }

  ngOnInit(): void {
    this.contratDeMarcheService.findAll().subscribe(data => {
      this.contrats = data;
    });
    this.fournisseurService.findAll().subscribe(data => {
      this.fournisseurs = data;
    });
    this.budgetService.displayBudgetInvestissements().subscribe(data => {
      this.budgets = data;
    });
    this.budgetService.displayBudgetMaintenances().subscribe(data => {
      this.budgetMaintenances = data;
    });
  }
  onSubmit() {
    //let myString = "123456789/xyz";
    let index = this.selected.indexOf("/"); // "index" will be 8
    let result = this.selected.substr(0, index + 1); // "result" will be "1234567897"
   if(this.selectedOption=="Investissement"){
      this.contratDeMarcheService.save(this.contrat,this.selectedd,parseInt(result)).subscribe(result => this.ngOnInit());
   }
   else if(this.selectedOption=="Maintenance"){
     this.contratDeMarcheService.saveMaintenance(this.contrat,this.selectedd,parseInt(result)).subscribe(result => this.ngOnInit());
   }
  }
}
