import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterModule, NavbarComponent, NgbModule]
})
export class AppComponent {
  title = 'my-medic-app';
}
