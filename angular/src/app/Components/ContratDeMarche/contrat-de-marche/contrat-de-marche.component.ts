import { Component, OnInit } from '@angular/core';
import {ContatDeMarche} from "../../../Modules/ContatDeMarche";
import {ContatDeMarcheService} from "../../../Services/ContatDeMarcheService/contat-de-marche.service";
import {Fournisseur} from "../../../Modules/Fournisseur";
import {FournisseurService} from "../../../Services/FournisseurService/fournisseur.service";
import {Budget} from "../../../Modules/Budget";
import {BudgetService} from "../../../Services/BudgetService/budget.service";
import {faTrashCan,faPenToSquare} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-contrat-de-marche',
  templateUrl: './contrat-de-marche.component.html',
  styleUrls: ['./contrat-de-marche.component.scss']
})
export class ContratDeMarcheComponent implements OnInit {
  faTrashCan=faTrashCan;
  faPenToSquare=faPenToSquare;
  search:string="";
  contrat: ContatDeMarche = new ContatDeMarche;
  contrats: ContatDeMarche[]=[];
  selected: string='seif';
  fournisseur:Fournisseur =new Fournisseur;
  budget:Budget =new Budget;
  selectedOption!: string; // Declare the selectedOption variable
  p: number = 1;
  itemsPerPage: number = 3;

  constructor(private contratDeMarcheService: ContatDeMarcheService, private fournisseurService: FournisseurService,private budgetService: BudgetService) { }

  ngOnInit(): void {

    if(this.selectedOption=="Investissement"){
    this.contratDeMarcheService.findAll().subscribe(data => {
      this.contrats = data;
    });

    }
  else if(this.selectedOption=="Maintenance"){
      this.contratDeMarcheService.findAllMaintenance().subscribe(data => {
        this.contrats = data;
      });
    }
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
  findBudget(c: ContatDeMarche){

      this.budget = c.budget;

  }
  findFournisseur(c : ContatDeMarche){
      this.fournisseur = c.fournisseur;
}

  searchAction(keyword: string){
    if(this.selectedOption=="Investissement"){
      this.contratDeMarcheService.searchInv(keyword).subscribe(data => {
        this.contrats = data;
      });

    }
    else if(this.selectedOption=="Maintenance"){
      this.contratDeMarcheService.searchmain(keyword).subscribe(data => {
        this.contrats = data;
      });
    }
    else{
    this.contratDeMarcheService.search(keyword).subscribe(data => {
      this.contrats = data;
    });
    }
  }
  templateForm() {
    console.log(this.selectedOption);
    this.ngOnInit()
  }
}
