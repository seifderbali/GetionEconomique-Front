import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from "../Services/authservice/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AlreadyLoggedInGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.IsLoggedIn()) {
      alert("you have already logged in")
      this.router.navigate(['/menu']);
      return false;
    }
    return true;
  }

}
