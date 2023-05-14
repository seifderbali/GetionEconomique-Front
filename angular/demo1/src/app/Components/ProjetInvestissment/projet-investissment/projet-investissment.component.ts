import { Component, OnInit } from '@angular/core';
import {ProjetInvestissment} from "../../../Modules/ProjetInvestissment";
import {ProjetInvestissmentService} from "../../../Services/ProjetInvestissmentService/projet-investissment.service";
import {BudgetInvestissement} from "../../../Modules/BudgetInvestissement";
import {BudgetInvestissementService} from "../../../Services/BudgetInvestissementService/budget-investissement.service";
declare var $: any;

@Component({
  selector: 'app-projet-investissment',
  templateUrl: './projet-investissment.component.html',
  styleUrls: ['./projet-investissment.component.scss']
})
export class ProjetInvestissmentComponent implements OnInit {

  search:string="";
  projetInvestissment: ProjetInvestissment = new ProjetInvestissment;
  projetInvestissments: ProjetInvestissment[]=[];
  budget:BudgetInvestissement = new BudgetInvestissement();

  constructor( private projetInvestissmentService: ProjetInvestissmentService,private budgetInvestissementService: BudgetInvestissementService) { }

  ngOnInit(): void {
    this.projetInvestissmentService.findAll().subscribe(data => {
      this.projetInvestissments = data;
    });
  }
  deleteProjet(id:number){
    this.projetInvestissmentService.deleteProjetInvestissment(id).subscribe(()=>this.projetInvestissmentService.findAll().subscribe(data=>{this.projetInvestissments=data}));
  }

  edit(projet: ProjetInvestissment){
    this.projetInvestissment = projet;
  }
  findBudget(id: number){
    this.projetInvestissmentService.findBudget(id).subscribe(data => {
      this.budget = data;
  });
  }
  updateProjet(){
    this.projetInvestissmentService.updateProjetInvestissment(this.projetInvestissment).subscribe(
      (resp) => {
        console.log(resp);
        $("#exampleModal").modal("hide");

      },
      (err) => {
        console.log(err);
      }
    );
  }
  updateBudgetInvestissement(){
    this.budgetInvestissementService.updateBudgetInvestissement(this.budget).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );

  }
  searchAction(keyword: string){
    this.projetInvestissmentService.search(keyword).subscribe(data => {
      this.projetInvestissments = data;
    });
  }

}
