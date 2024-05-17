import { Component, OnInit, computed, inject } from '@angular/core';
import { LinearGraphComponent } from "../../linear-graph/linear-graph.component";
import { TabellaGeneraleComponent } from "../../tabella-generale/tabella-generale.component";

import { Store } from '@ngrx/store';
import { PressureActions } from '../../store/pressure/pressure.actions';
import { selectPressureGraphModel, selectPressureParams } from '../../store/pressure/pressure.selectors';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [LinearGraphComponent, TabellaGeneraleComponent, CommonModule],
})
export class HomeComponent{

  store = inject(Store);
  //pressureParams = this.store.selectSignal(selectPressureParams)();
  pressureModel = this.store.selectSignal(selectPressureGraphModel)();

  constructor(){
    this.store.dispatch(PressureActions.loadPressureParams());
  }


  


 


  getPressureData(){
    return undefined;
  } 

}
