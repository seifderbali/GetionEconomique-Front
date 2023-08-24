import { Component, OnInit } from '@angular/core';
import {User} from "../../../Modules/User";
import {UserService} from "../../../Services/userService/user.service";
import {EntiteSI} from "../../../Modules/EntiteSI";
import {EntiteSIService} from "../../../Services/EntiteSIService/entite-si.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
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
  onSubmit() {
    this.entiteSIService.findByName(this.selected).subscribe(data => {
      this.userService.save(this.user,data.id).subscribe(result => this.ngOnInit());
    });

  }
}
