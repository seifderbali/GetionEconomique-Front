import { Component, OnInit } from '@angular/core';
import {User} from "../../../Modules/User";
import {EntiteSI} from "../../../Modules/EntiteSI";
import {EntiteSIService} from "../../../Services/EntiteSIService/entite-si.service";

@Component({
  selector: 'app-add-entite-si',
  templateUrl: './add-entite-si.component.html',
  styleUrls: ['./add-entite-si.component.scss']
})
export class AddEntiteSIComponent implements OnInit {
  entiteSIs: EntiteSI[]=[];
  entiteSI: EntiteSI= new EntiteSI;

  constructor(private entiteSIService: EntiteSIService) { }

  ngOnInit(): void {
    this.entiteSIService.findAll().subscribe(data => {
      this.entiteSIs = data;
    });
  }
  onSubmit() {
      this.entiteSIService.save(this.entiteSI).subscribe(result => this.ngOnInit());
  }
}
