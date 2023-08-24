import { Component, OnInit } from '@angular/core';
import {Fournisseur} from "../../../Modules/Fournisseur";
import {FournisseurService} from "../../../Services/FournisseurService/fournisseur.service";

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.scss']
})
export class AddFournisseurComponent implements OnInit {
  fournisseurs: Fournisseur[]=[];
  fournisseur: Fournisseur= new Fournisseur;

  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
    this.fournisseurService.findAll().subscribe(data => {
      this.fournisseurs = data;
    });
  }
  onSubmit() {
    this.fournisseurService.save(this.fournisseur).subscribe(result => this.ngOnInit());
  }
}
