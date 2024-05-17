import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  styles: `
    .menu-back-button {
      position: fixed;
      bottom: 20px;
      right: 30px;
      z-index: 99;
      border: none;
      outline: none;
      background-color: #007BFF;
      color: white;
      cursor: pointer;
      padding: 10px;
      border-radius: 10px;
      font-size: 12px;
      text-decoration: none;
    }
  `,
  template: `
    <router-outlet></router-outlet>
    <a class="menu-back-button" routerLink="/NO000">回目錄</a>
  `,
})
export class AppComponent {}
