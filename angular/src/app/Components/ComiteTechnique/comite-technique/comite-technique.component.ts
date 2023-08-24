import { Component, OnInit } from '@angular/core';
import {ComiteTechnique} from "../../../Modules/ComiteTechnique";
import {DateValidation} from "../../../Modules/DateValidation";
import {ComiteTechniqueService} from "../../../Services/ComiteTechniqueService/comite-technique.service";

import {Budget} from "../../../Modules/Budget";
import {faTrashCan,faPenToSquare} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-comite-technique',
  templateUrl: './comite-technique.component.html',
  styleUrls: ['./comite-technique.component.scss']
})
export class ComiteTechniqueComponent implements OnInit {
  faTrashCan=faTrashCan;
  faPenToSquare=faPenToSquare;
  search:string="";
  comite: ComiteTechnique = new ComiteTechnique;
  comites: ComiteTechnique[]=[];
  selected: string='seif';
  datevalidation:DateValidation =new DateValidation;
  budget:Budget =new Budget;
  selectedOption!: string; // Declare the selectedOption variable

  p: number = 1;
  itemsPerPage: number = 3;
  constructor(private comiteTechniqueService: ComiteTechniqueService) { }

  ngOnInit(): void {
    if(this.selectedOption=="Investissement"){
      this.comiteTechniqueService.findAllInvestissement().subscribe(data => {
        this.comites = data;
      });

    }
    else if(this.selectedOption=="Maintenance"){
      this.comiteTechniqueService.findAllMaintenance().subscribe(data => {
        this.comites = data;
      });
    }

  }

  deleteComite(id:number){
    this.comiteTechniqueService.deleteComite(id).subscribe(()=>this.comiteTechniqueService.findAll().subscribe(data=>{this.comites=data}));
  }

  edit(comite: ComiteTechnique){
    this.comite = comite;
  }
  updateComite(){
    this.comiteTechniqueService.updateComite(this.comite).subscribe(result => this.ngOnInit());

  }

  findDateValidation(comite: ComiteTechnique){
      this.datevalidation = comite.dateValidation;
  }
  findBudget(comite: ComiteTechnique){
      this.budget = comite.budget;
   }
  searchAction(keyword: string){
    if(this.selectedOption=="Investissement"){
      this.comiteTechniqueService.searchInv(keyword).subscribe(data => {
        this.comites = data;
      });

    }
    else if(this.selectedOption=="Maintenance"){
      this.comiteTechniqueService.searchMain(keyword).subscribe(data => {
        this.comites = data;
      });
    }
    else{
    this.comiteTechniqueService.search(keyword).subscribe(data => {
      this.comites = data;
    });
    }
  }
  templateForm() {
    console.log(this.selectedOption);
    this.ngOnInit()
  }
}
