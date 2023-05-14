import { Component, OnInit } from '@angular/core';
import {BudgetInvestissement} from "../../../Modules/BudgetInvestissement";
import {BudgetInvestissementService} from "../../../Services/BudgetInvestissementService/budget-investissement.service";
import {EntiteSIService} from "../../../Services/EntiteSIService/entite-si.service";
import {EntiteSI} from "../../../Modules/EntiteSI";
import {ProjetInvestissment} from "../../../Modules/ProjetInvestissment";
import {ContatDeMarcheService} from "../../../Services/ContatDeMarcheService/contat-de-marche.service";
import {ContatDeMarche} from "../../../Modules/ContatDeMarche";

@Component({
  selector: 'app-budget-investissement',
  templateUrl: './budget-investissement.component.html',
  styleUrls: ['./budget-investissement.component.scss']
})
export class BudgetInvestissementComponent implements OnInit {

  search:string="";
  budgetInvestissement: BudgetInvestissement = new BudgetInvestissement;
  budgetInvestissements: BudgetInvestissement[]=[];
  selected: string='seif';
  entiteSIs:EntiteSI []=[];
  entiteSI:EntiteSI =new EntiteSI;
  projetInvestissment: ProjetInvestissment = new ProjetInvestissment;
  contrats: ContatDeMarche[]=[];

  constructor(private budgetInvestissementService: BudgetInvestissementService,  private entiteSIService: EntiteSIService, private contratDeMarcheService: ContatDeMarcheService) { }

  ngOnInit(): void {
    this.budgetInvestissementService.findAll().subscribe(data => {
      this.budgetInvestissements = data;
    });
    this.entiteSIService.findAll().subscribe(data => {
      this.entiteSIs = data;
    });
  }
  deleteBudgetInvestissement(id:number){
    this.budgetInvestissementService.deleteBudgetInvestissement(id).subscribe(()=>this.budgetInvestissementService.findAll().subscribe(data=>{this.budgetInvestissements=data}));
  }

  edit(budgetInvestissement: BudgetInvestissement){
    this.budgetInvestissement = budgetInvestissement;
  }
  updateBudgetInvestissement(){
    this.budgetInvestissementService.updateBudgetInvestissement(this.budgetInvestissement).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );

  }

  test(){
    if(this.selected != "Select EntiteSI")
    {
      this.entiteSIService.findByName(this.selected).subscribe(data => {
        this.budgetInvestissementService.findByEntite(data.id).subscribe(dataa => {
          this.budgetInvestissements = dataa;
        });
      });
    }
    else {
      this.ngOnInit();
    }
  }

  show(id: number){
    this.budgetInvestissementService.findProject(id).subscribe(data => {
      this.projetInvestissment = data;
    });
  }

  showContrat(id: number){
    this.contratDeMarcheService.findByBudget(id).subscribe(data => {
      this.contrats = data;
    });
  }
}
