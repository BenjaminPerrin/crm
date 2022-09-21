import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string;
  // ou sinon public title!: string; si on l'innitialise pas ! = | undefined
  constructor() {
    this.title = 'crm';
  }
}
