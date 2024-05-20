import { CommonModule } from '@angular/common';
import { Component, Input, Signal, computed, inject } from '@angular/core';
import { MedicParameter } from '../../core/model/medic-parameter';
import { PressureActions } from '../../store/pressure/pressure.actions';
import { Store } from '@ngrx/store';
import { selectPressureParams } from '../../store/pressure/pressure.selectors';

@Component({
  selector: 'app-pressure-archive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pressure-archive.component.html',
  styleUrl: './pressure-archive.component.scss'
})
export class PressureArchiveComponent {

  store = inject(Store);
  pressureParams$ = this.store.selectSignal(selectPressureParams);


  constructor(){
    this.store.dispatch(PressureActions.loadPressureParams());
  }

  deleteRecord(p: MedicParameter){
    this.store.dispatch(PressureActions.deletePressionParams({payload: p}))

  }
  
  getParams() {
    return  computed(()=>{
      return this.pressureParams$
    })();

  }
}
