import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginReq } from 'src/app/Modules/LoginReq';
import { AuthService } from 'src/app/Services/authservice/auth.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthlogService} from "../../shared/authlog.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  hasError: boolean = false;
  loginForm!: FormGroup;


  constructor(private authlogService: AuthlogService, private serviceuser :AuthService ,private router: Router,private fb: FormBuilder) { }
  user:LoginReq = new LoginReq();
  sessionid: String ='0';


  ngOnInit(): void {

      this.loginForm = this.fb.group({
        id: ['', Validators.required],
        ps: ['', Validators.required ],

      },
      );

  }

  invalidLogin = false


  get f() {
    return this.loginForm.controls;
  }




  @Input() error!: string | null;

  checkLogin() {

    (this.serviceuser.authenticate(this.user).subscribe(
        data => {

          if (data.token!="PASSWD" && data.token!="UNKNOWN") {
            localStorage.setItem("id", data.id.toString());
            localStorage.setItem("token", data.token.toString());
            localStorage.setItem("mail", data.mail);

            this.sessionid=data.id.toString();
            this.router.navigateByUrl('/menu');
            this.authlogService.setId(data.id.toString());

          }

        },
          error => {
          this.invalidLogin = true
          this.error = error.message;

        }
      )
    );

  }
  logOut(){
     this.serviceuser.logOut();
    this.router.navigateByUrl('/');

    }





}
