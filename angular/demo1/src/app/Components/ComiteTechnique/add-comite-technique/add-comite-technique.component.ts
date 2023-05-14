import { Component, OnInit } from '@angular/core';
import {ComiteTechnique} from "../../../Modules/ComiteTechnique";
import {DateValidation} from "../../../Modules/DateValidation";
import {ComiteTechniqueService} from "../../../Services/ComiteTechniqueService/comite-technique.service";
import {DateValidationService} from "../../../Services/DateValidationService/date-validation.service";
import {ProjetInvestissment} from "../../../Modules/ProjetInvestissment";
import {ProjetInvestissmentService} from "../../../Services/ProjetInvestissmentService/projet-investissment.service";

@Component({
  selector: 'app-add-comite-technique',
  templateUrl: './add-comite-technique.component.html',
  styleUrls: ['./add-comite-technique.component.scss']
})
export class AddComiteTechniqueComponent implements OnInit {
  comite: ComiteTechnique = new ComiteTechnique;
  dateValidation: DateValidation = new DateValidation;
  dateValidations: DateValidation []=[];
  comites: ComiteTechnique []=[];
  projet: ProjetInvestissment = new ProjetInvestissment;
  projets: ProjetInvestissment []=[];
  selected: number;

  constructor(private comiteService: ComiteTechniqueService, private dateValidationService: DateValidationService, private projetService: ProjetInvestissmentService) { }

  ngOnInit(): void {
    this.comiteService.findAll().subscribe(data => {
      this.comites = data;
    });
    this.projetService.findAll().subscribe(data => {
      this.projets = data;
    });
  }
  onSubmit() {
    this.dateValidationService.save(this.dateValidation).subscribe(datas => {
        this.dateValidationService.findAll().subscribe(data => {
          this.dateValidations = data;
          this.comiteService.save(this.comite,data[data.length-1].id,this.selected).subscribe(result => this.ngOnInit());

        });
      });
  }
}
