import { Component, OnInit } from '@angular/core';
import {ComiteTechnique} from "../../../Modules/ComiteTechnique";
import {ProjetInvestissment} from "../../../Modules/ProjetInvestissment";
import {DateValidation} from "../../../Modules/DateValidation";
import {ComiteTechniqueService} from "../../../Services/ComiteTechniqueService/comite-technique.service";
import {DateValidationService} from "../../../Services/DateValidationService/date-validation.service";
import {ProjetInvestissmentService} from "../../../Services/ProjetInvestissmentService/projet-investissment.service";

@Component({
  selector: 'app-comite-technique',
  templateUrl: './comite-technique.component.html',
  styleUrls: ['./comite-technique.component.scss']
})
export class ComiteTechniqueComponent implements OnInit {
  search:string="";
  comite: ComiteTechnique = new ComiteTechnique;
  comites: ComiteTechnique[]=[];
  selected: string='seif';
  datevalidation:DateValidation =new DateValidation;
  projet:ProjetInvestissment =new ProjetInvestissment;
  constructor(private comiteTechniqueService: ComiteTechniqueService, private dateValidationService: DateValidationService,private projetService: ProjetInvestissmentService) { }

  ngOnInit(): void {
    this.comiteTechniqueService.findAll().subscribe(data => {
      this.comites = data;
    });

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
  findprojet(comite: ComiteTechnique){
      this.projet = comite.projetInvestissment;
   }
  searchAction(keyword: string){
    this.comiteTechniqueService.search(keyword).subscribe(data => {
      this.comites = data;
    });
  }
}
