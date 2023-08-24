import {Component, OnInit} from '@angular/core';
import {AuthlogService} from "./shared/authlog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FRONT';
  id!: string | null;

  constructor(private authService: AuthlogService) {}

  ngOnInit() {
    this.id = this.authService.getId() || localStorage.getItem('id');
    this.authService.setId(this.id); // Store the id in the AuthService for persistence
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
