import { Component, OnInit } from '@angular/core';
import {User} from "../../Modules/User";
import {UserService} from "../../Services/userService/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user : User = new User;
  sexe=['Male','Female'];
  role=['User','Manager','Admin'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let value: string | null = localStorage.getItem("id");

    if (value !== null) {
      this.userService.find(parseInt(value)).subscribe(dataa => {
        this.user = dataa;
      });
    }
  }

}
