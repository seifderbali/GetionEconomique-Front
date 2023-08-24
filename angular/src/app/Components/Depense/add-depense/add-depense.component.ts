import { Component, OnInit } from '@angular/core';
import {Depense} from "../../../Modules/Depense";
import {Facture} from "../../../Modules/Facture";
import {ContatDeMarche} from "../../../Modules/ContatDeMarche";
import {DepenseService} from "../../../Services/DeponseService/depense.service";
import {FactureService} from "../../../Services/FactureService/facture.service";
import {ContatDeMarcheService} from "../../../Services/ContatDeMarcheService/contat-de-marche.service";


@Component({
  selector: 'app-add-depense',
  templateUrl: './add-depense.component.html',
  styleUrls: ['./add-depense.component.scss']
})
export class AddDepenseComponent implements OnInit {

  depense: Depense = new Depense;
  facture: Facture = new Facture;
  factures: Facture []=[];
  depenses: Depense []=[];
  contrat: ContatDeMarche = new ContatDeMarche;
  contrats: ContatDeMarche []=[];
  selected!: number;


  constructor(private depenseService: DepenseService, private factureServise: FactureService, private contratService: ContatDeMarcheService) {
  }

  ngOnInit(): void {
    this.depenseService.findAll().subscribe(data => {
      this.depenses = data;
    });

    this.contratService.findAll().subscribe(data => {
      this.contrats = data;
    });
  }


  onSubmit() {
    this.factureServise.save(this.facture).subscribe(datas => {
      this.factureServise.findAll().subscribe(data => {
        this.factures = data;
        this.depenseService.save(this.depense,data[data.length-1].id,this.selected).subscribe(result => this.ngOnInit());

      });
    });
  }
}
