import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    // template: `<app-header></app-header><h1>Hello WOrd!</h1>`,
})
export class AppComponent {
  title = 'verse_monk';
}
