import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pageNames: string[] = [
    "About Me",
    "Work",
    "Clients",
    "Contat",
  ];

  title = 'training-session';
}
