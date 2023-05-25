import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../Services/authservice/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : AuthService, private router : Router) {
  }
  canActivate() {
    if (this.auth.IsLoggedIn()) {

      return true;
    }
    alert("you have to be logged in")
    this.router.navigateByUrl('/');
    return false;
  }


}
