import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logOut() {
    localStorage.removeItem("id");
    //localStorage.removeItem("token");
    this.router.navigateByUrl('/');

  }

}
