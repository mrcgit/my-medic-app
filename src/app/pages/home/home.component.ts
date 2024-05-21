import { Component,inject } from '@angular/core';
import { LinearGraphComponent } from "../../linear-graph/linear-graph.component";
import { TabellaGeneraleComponent } from "../../components/tabella-generale/tabella-generale.component";

import { Store } from '@ngrx/store';
import { PressureActions } from '../../store/pressure/pressure.actions';
import { selectPressureParams } from '../../store/pressure/pressure.selectors';
import { CommonModule } from '@angular/common';
import { PressureGraphComponent } from "../../components/pressure-graph/pressure-graph.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [LinearGraphComponent, TabellaGeneraleComponent, CommonModule, PressureGraphComponent]
})
export class HomeComponent{

  store = inject(Store);
  pressureParams$ = this.store.selectSignal(selectPressureParams);

  constructor(){
    this.store.dispatch(PressureActions.loadPressureParams());
  }

  hasPressureData(){
    return this.pressureParams$ && this.pressureParams$().length > 0
  }



}
