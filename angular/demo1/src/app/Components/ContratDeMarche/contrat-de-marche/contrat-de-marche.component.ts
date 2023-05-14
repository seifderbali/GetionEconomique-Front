import { Component, OnInit } from '@angular/core';
import {ContatDeMarche} from "../../../Modules/ContatDeMarche";
import {ContatDeMarcheService} from "../../../Services/ContatDeMarcheService/contat-de-marche.service";
import {Fournisseur} from "../../../Modules/Fournisseur";
import {BudgetInvestissement} from "../../../Modules/BudgetInvestissement";
import {FournisseurService} from "../../../Services/FournisseurService/fournisseur.service";
import {BudgetInvestissementService} from "../../../Services/BudgetInvestissementService/budget-investissement.service";


@Component({
  selector: 'app-contrat-de-marche',
  templateUrl: './contrat-de-marche.component.html',
  styleUrls: ['./contrat-de-marche.component.scss']
})
export class ContratDeMarcheComponent implements OnInit {
  search:string="";
  contrat: ContatDeMarche = new ContatDeMarche;
  contrats: ContatDeMarche[]=[];
  selected: string='seif';
  fournisseur:Fournisseur =new Fournisseur;
  budget:BudgetInvestissement =new BudgetInvestissement;
  constructor(private contratDeMarcheService: ContatDeMarcheService, private fournisseurService: FournisseurService,private budgetInvestissementService: BudgetInvestissementService) { }

  ngOnInit(): void {
    this.contratDeMarcheService.findAll().subscribe(data => {
      this.contrats = data;
    });

  }
  deleteContrat(id:number){
    this.contratDeMarcheService.deleteForumById(id).subscribe(()=>this.contratDeMarcheService.findAll().subscribe(data=>{this.contrats=data}));
  }

  edit(contrat: ContatDeMarche){
    this.contrat = contrat;
  }
  updateContratDeMarche(){
      this.contratDeMarcheService.updateForum(this.contrat).subscribe(result => this.ngOnInit());

  }
  findBudget(id: number){
    this.budgetInvestissementService.findByContrat(id).subscribe(data => {
      this.budget = data;
    });
  }
  findFournisseur(id: number){
    this.fournisseurService.findByContrat(id).subscribe(data => {
      this.fournisseur = data;
    });  }

  searchAction(keyword: string){
    this.contratDeMarcheService.search(keyword).subscribe(data => {
      this.contrats = data;
    });
  }
}
