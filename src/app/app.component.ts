import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Quiz App</h1>
    <nav>
      <a routerLink="/questions" routerLinkActive="active">Home</a>
      <a routerLink="/create-question" routerLinkActive="active">Create new question</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }