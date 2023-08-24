import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthlogService} from "../shared/authlog.service";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor(private authService: AuthlogService, private router: Router) { }

  ngOnInit(): void {
    let value: string | null = localStorage.getItem("token");


  }
  logOut() {
    this.authService.clearId();

    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("mail");
    this.router.navigateByUrl('/');
  }
}
