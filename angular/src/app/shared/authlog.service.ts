import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthlogService {
  private id: string | null = null;

  setId(id: string | null) {
    this.id = id;
  }

  getId(): string | null {
    return this.id;
  }
  clearId() {
    this.id = null;
  }
  isLoggedIn(): boolean {
    return !!this.id;
  }
}
