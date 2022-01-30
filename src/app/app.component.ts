import { Component } from '@angular/core';
import { User } from './app.modles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  user: User | null = null;
}
