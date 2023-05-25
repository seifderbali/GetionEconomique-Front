import { Component, OnInit } from '@angular/core';
import {Depense} from "../../../Modules/Depense";
import {Facture} from "../../../Modules/Facture";
import {DepenseService} from "../../../Services/DeponseService/depense.service";
import {ContatDeMarche} from "../../../Modules/ContatDeMarche";


@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.scss']
})
export class DepenseComponent implements OnInit {
  search:string="";
  depense: Depense = new Depense;
  depenses: Depense[]=[];
  selected: string='seif';
  facture:Facture =new Facture;
  contrat:ContatDeMarche =new ContatDeMarche;


  constructor(private depenseService: DepenseService) { }

  ngOnInit(): void {

      this.depenseService.findAll().subscribe(data => {
        this.depenses = data;
      });

  }
  deleteDepense(id:number){
    this.depenseService.deleteDepense(id).subscribe(()=>this.depenseService.findAll().subscribe(data=>{this.depenses=data}));
  }

  edit(depense: Depense){
    this.depense = depense;
  }
  updateDepense(){
    this.depenseService.updateDepense(this.depense).subscribe(result => this.ngOnInit());

  }

  findFacture(depense: Depense){
    this.facture = depense.facture;
  }
  findContatDeMarche(depense: Depense){
    this.contrat = depense.contrat;
  }
  searchAction(keyword: string){

      this.depenseService.search(keyword).subscribe(data => {
        this.depenses = data;
      });
    }


}
