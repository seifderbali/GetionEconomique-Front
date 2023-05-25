import { Component, OnInit } from '@angular/core';
import {EntiteSI} from "../../../Modules/EntiteSI";
import {ContatDeMarche} from "../../../Modules/ContatDeMarche";
import {EntiteSIService} from "../../../Services/EntiteSIService/entite-si.service";
import {ContatDeMarcheService} from "../../../Services/ContatDeMarcheService/contat-de-marche.service";
import {Budget} from "../../../Modules/Budget";
import {BudgetService} from "../../../Services/BudgetService/budget.service";


@Component({
  selector: 'app-budget-maintenance',
  templateUrl: './budget-maintenance.component.html',
  styleUrls: ['./budget-maintenance.component.scss']
})
export class BudgetMaintenanceComponent implements OnInit {

  search:string="";
  budgetMaintenance: Budget = new Budget;
  budgetMaintenances: Budget[]=[];
  selected: string='seif';
  entiteSIs:EntiteSI []=[];
  entiteSI:EntiteSI =new EntiteSI;
  contrats: ContatDeMarche[]=[];

  constructor(private budgetMaintenanceService: BudgetService,  private entiteSIService: EntiteSIService, private contratDeMarcheService: ContatDeMarcheService) { }

  ngOnInit(): void {
    this.budgetMaintenanceService.displayBudgetMaintenances().subscribe(data => {
      this.budgetMaintenances = data;
    });
    this.entiteSIService.findAll().subscribe(data => {
      this.entiteSIs = data;
    });
  }
  deleteBudgetMaintenance(id:number){
    this.budgetMaintenanceService.deleteBudget(id).subscribe(()=>this.budgetMaintenanceService.displayBudgetMaintenances().subscribe(data=>{this.budgetMaintenances=data}));
  }

  edit(budgetMaintenance: Budget){
    this.budgetMaintenance = budgetMaintenance;
  }
  updateBudgetMaintenance(){
    this.budgetMaintenanceService.updateBudget(this.budgetMaintenance).subscribe(
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
        this.budgetMaintenanceService.findByEntiteMaintenance(data.id).subscribe(dataa => {
          this.budgetMaintenances = dataa;
        });
      });
    }
    else {
      this.ngOnInit();
    }


  }

  showContrat(id: number){
    this.contratDeMarcheService.findByBudget(id).subscribe(data => {
      this.contrats = data;
    });
  }
}

