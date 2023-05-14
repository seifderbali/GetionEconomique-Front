import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginReq } from 'src/app/Modules/LoginReq';
import { map } from 'rxjs';
import {User} from "../../Modules/User";
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }

  authenticate(et:LoginReq) {
    return this.http.post<User>("http://localhost:8081/api/User/doLogin", et)
     .pipe(
        map(userData => {
          localStorage.setItem("mail", et.mail);
          let tokenStr = "Bearer " + userData.token;

          return userData;
        })
      );
  }


  logOut() {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
  }
  /*
  public send(){
    return this.http.get<Response>(" http://localhost:8085/api/pdf/genStage/"+localStorage.getItem("id")+"/pdf.pdf")
  }
 /* isUserLoggedIn() {
    let user = localStorage.getItem("id");
    console.log(!(user === null));
    return !(user === null);
  }

  IsLoggedIn(){
    return !!localStorage.getItem('id');
  }
*/
}
