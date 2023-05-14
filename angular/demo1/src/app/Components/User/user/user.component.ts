import { Component, OnInit } from '@angular/core';
import {User} from "../../../Modules/User";
import {UserService} from "../../../Services/userService/user.service";
import {EntiteSI} from "../../../Modules/EntiteSI";
import {EntiteSIService} from "../../../Services/EntiteSIService/entite-si.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  search:string="";
  user: User = new User;
  users: User[]=[];
  sexe=['Male','Female'];
  role=['User','Manager','Admin'];
  selected: string='seif';
  entiteSIs:EntiteSI []=[];
  entiteSI:EntiteSI =new EntiteSI;

  constructor(private userService: UserService, private entiteSIService: EntiteSIService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    this.entiteSIService.findAll().subscribe(data => {
      this.entiteSIs = data;
    });
  }
  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(()=>this.userService.findAll().subscribe(data=>{this.users=data}));
  }

  edit(user: User){
    this.user = user;
  }
  updateUser(){
    this.entiteSIService.findByName(this.selected).subscribe(data => {
      this.userService.updateUser(this.user,data.id).subscribe(result => this.ngOnInit());
    });
  }

}
