import { Component, OnInit } from '@angular/core';
import {Fournisseur} from "../../../Modules/Fournisseur";
import {FournisseurService} from "../../../Services/FournisseurService/fournisseur.service";
import {ContatDeMarche} from "../../../Modules/ContatDeMarche";
import {ContatDeMarcheService} from "../../../Services/ContatDeMarcheService/contat-de-marche.service";
import {faTrashCan,faPenToSquare} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {
  faTrashCan=faTrashCan;
  faPenToSquare=faPenToSquare;
  search:string="";
  fournisseur: Fournisseur = new Fournisseur;
  fournisseurs: Fournisseur[]=[];
  contrats: ContatDeMarche[]=[];
  p: number = 1;
  itemsPerPage: number = 3;

  constructor(private fournisseurService: FournisseurService, private contratDeMarcheService: ContatDeMarcheService) { }

  ngOnInit(): void {
    this.fournisseurService.findAll().subscribe(data => {
      this.fournisseurs = data;
    });
  }
  deleteFournisseur(id:number){
    this.fournisseurService.deleteFournisseur(id).subscribe(()=>this.fournisseurService.findAll().subscribe(data=>{this.fournisseurs=data}));
  }

  edit(fournisseur: Fournisseur){
    this.fournisseur = fournisseur;
  }
  updateFournisseur(){
    this.fournisseurService.updateFournisseur(this.fournisseur).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );

  }
  searchAction(keyword: string){
    this.fournisseurService.search(keyword).subscribe(data => {
      this.fournisseurs = data;
    });
  }

  showContrat(id: number){
    this.contratDeMarcheService.findByFournisseur(id).subscribe(data => {
      this.contrats = data;
    });
  }
}
