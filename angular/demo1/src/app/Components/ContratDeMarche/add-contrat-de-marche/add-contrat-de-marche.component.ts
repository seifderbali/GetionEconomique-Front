import { Component, OnInit } from '@angular/core';
import {ContatDeMarche} from "../../../Modules/ContatDeMarche";
import {Fournisseur} from "../../../Modules/Fournisseur";
import {BudgetInvestissement} from "../../../Modules/BudgetInvestissement";
import {ContatDeMarcheService} from "../../../Services/ContatDeMarcheService/contat-de-marche.service";
import {FournisseurService} from "../../../Services/FournisseurService/fournisseur.service";
import {BudgetInvestissementService} from "../../../Services/BudgetInvestissementService/budget-investissement.service";

@Component({
  selector: 'app-add-contrat-de-marche',
  templateUrl: './add-contrat-de-marche.component.html',
  styleUrls: ['./add-contrat-de-marche.component.scss']
})
export class AddContratDeMarcheComponent implements OnInit {
  contrat: ContatDeMarche = new ContatDeMarche;
  contrats: ContatDeMarche[]=[];

  selected: string='seif';
  selectedd: number;
  fournisseurs:Fournisseur []=[];
  fournisseur:Fournisseur =new Fournisseur;
  budgets:BudgetInvestissement []=[];
  budget:BudgetInvestissement =new BudgetInvestissement;

  constructor(private contratDeMarcheService: ContatDeMarcheService, private fournisseurService: FournisseurService,private budgetInvestissementService: BudgetInvestissementService) { }

  ngOnInit(): void {
    this.contratDeMarcheService.findAll().subscribe(data => {
      this.contrats = data;
    });
    this.fournisseurService.findAll().subscribe(data => {
      this.fournisseurs = data;
    });
    this.budgetInvestissementService.findAll().subscribe(data => {
      this.budgets = data;
    });
  }
  onSubmit() {
    //let myString = "123456789/xyz";
    let index = this.selected.indexOf("/"); // "index" will be 8
    let result = this.selected.substr(0, index + 1); // "result" will be "1234567897"

      this.contratDeMarcheService.save(this.contrat,this.selectedd,parseInt(result)).subscribe(result => this.ngOnInit());

  }
}
