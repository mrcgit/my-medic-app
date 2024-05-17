import { Component, OnInit, computed, inject } from '@angular/core';
import { LinearGraphComponent } from "../../linear-graph/linear-graph.component";
import { TabellaGeneraleComponent } from "../../tabella-generale/tabella-generale.component";
import { toObservable } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { PressureActions } from '../../store/pressure/pressure.actions';
import { selectPresssureGraphModel, selectPressureParams } from '../../store/pressure/pressure.selectors';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [LinearGraphComponent, TabellaGeneraleComponent, CommonModule]
})
export class HomeComponent{

  store = inject(Store);
  pressureParams$ = this.store.selectSignal(selectPressureParams);
  pressureModel = this.store.selectSignal(selectPresssureGraphModel)();

  constructor(){
    this.store.dispatch(PressureActions.loadPressureParams());

    toObservable(this.pressureParams$).pipe(
      map((response) => {
        return PressureActions.loadPressureGraphModel({ payload: response })
      }),
    )
  }


  


 


  getPressureData(){
    return undefined;
  } 

}
