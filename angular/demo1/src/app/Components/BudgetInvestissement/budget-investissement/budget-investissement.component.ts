import { Component, OnInit } from '@angular/core';
import {EntiteSIService} from "../../../Services/EntiteSIService/entite-si.service";
import {EntiteSI} from "../../../Modules/EntiteSI";
import {ProjetInvestissment} from "../../../Modules/ProjetInvestissment";
import {ContatDeMarcheService} from "../../../Services/ContatDeMarcheService/contat-de-marche.service";
import {ContatDeMarche} from "../../../Modules/ContatDeMarche";
import {BudgetService} from "../../../Services/BudgetService/budget.service";
import {Budget} from "../../../Modules/Budget";

@Component({
  selector: 'app-budget-investissement',
  templateUrl: './budget-investissement.component.html',
  styleUrls: ['./budget-investissement.component.scss']
})
export class BudgetInvestissementComponent implements OnInit {

  search:string="";
  budgetInvestissement: Budget = new Budget;
  budgetInvestissements: Budget[]=[];
  selected: string='seif';
  entiteSIs:EntiteSI []=[];
  entiteSI:EntiteSI =new EntiteSI;
  projetInvestissment: ProjetInvestissment = new ProjetInvestissment;
  contrats: ContatDeMarche[]=[];

  constructor(private budgetInvestissementService: BudgetService,  private entiteSIService: EntiteSIService, private contratDeMarcheService: ContatDeMarcheService) { }

  ngOnInit(): void {
    this.budgetInvestissementService.displayBudgetInvestissements().subscribe(data => {
      this.budgetInvestissements = data;
    });
    this.entiteSIService.findAll().subscribe(data => {
      this.entiteSIs = data;
    });
  }
  deleteBudgetInvestissement(id:number){
    this.budgetInvestissementService.deleteBudget(id).subscribe(()=>this.budgetInvestissementService.displayBudgetInvestissements().subscribe(data=>{this.budgetInvestissements=data}));
  }

  edit(budgetInvestissement: Budget){
    this.budgetInvestissement = budgetInvestissement;
  }
  updateBudgetInvestissement(){
    this.budgetInvestissementService.updateBudget(this.budgetInvestissement).subscribe(
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
        this.budgetInvestissementService.findByEntiteInvestissement(data.id).subscribe(dataa => {
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
