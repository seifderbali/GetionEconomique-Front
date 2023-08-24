import { Component, OnInit } from '@angular/core';
import {EntiteSIService} from "../../../Services/EntiteSIService/entite-si.service";
import {EntiteSI} from "../../../Modules/EntiteSI";
import {faTrashCan,faPenToSquare} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-entite-si',
  templateUrl: './entite-si.component.html',
  styleUrls: ['./entite-si.component.scss']
})
export class EntiteSIComponent implements OnInit {
  faTrashCan=faTrashCan;
  faPenToSquare=faPenToSquare;
  entiteSIs: EntiteSI[]=[];
  entiteSI: EntiteSI= new EntiteSI;
  search:string="";
  p: number = 1;
  itemsPerPage: number = 3;

  constructor(private entiteSIService: EntiteSIService) { }

  ngOnInit(): void {
    this.entiteSIService.findAll().subscribe(data => {
      this.entiteSIs = data;
    });
  }
  deleteEntiteSI(id:number){
    this.entiteSIService.deleteEntiteSI(id).subscribe(()=>this.entiteSIService.findAll().subscribe(data=>{this.entiteSIs=data}));
  }

  edit(entiteSI: EntiteSI){
    this.entiteSI = entiteSI;
  }
  updateUser(){
    this.entiteSIService.updateEntiteSI(this.entiteSI).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  searchAction(keyword: string){
    this.entiteSIService.search(keyword).subscribe(data => {
      this.entiteSIs = data;
    });
  }
}
