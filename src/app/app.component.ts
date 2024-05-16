import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { FeatureActions } from './store/features/features.actions';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterModule, NavbarComponent, NgbModule]
})
export class AppComponent {
  title = 'my-medic-app';

  store = inject(Store);


  constructor(){
   
    this.store.dispatch(FeatureActions.loadFeatures())
  }
}
