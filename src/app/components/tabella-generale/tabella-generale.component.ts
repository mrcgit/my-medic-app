import { Component, Input, Signal, computed, inject } from '@angular/core';
import { MedicParameter } from '../../core/model/medic-parameter';
import { Store } from '@ngrx/store';
import { selectPressureParams } from '../../store/pressure/pressure.selectors';
import { CommonModule } from '@angular/common';
import { selectTemeratureParams } from '../../store/temperature/temperature.selectors';

@Component({
  selector: 'tabella-generale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabella-generale.component.html',
  styleUrl: './tabella-generale.component.scss'
})
export class TabellaGeneraleComponent {

  store = inject(Store);
  pressureData$: Signal<MedicParameter[]> = this.store.selectSignal(selectPressureParams);
  temperatureData$: Signal<MedicParameter[]> = this.store.selectSignal(selectTemeratureParams)


  getPressureModel(){
    return computed(()=>{
      if(this.pressureData$()){
        const idx = this.pressureData$().length - 1;
        return this.pressureData$()[idx];
      } 
      return undefined;
    })()
  }

  getTemperatureModel(){
    return computed(()=>{
      if(this.temperatureData$()){
        const idex = this.temperatureData$().length -1
        return this.temperatureData$()[idex];
      } 
      return undefined;
    })();
  }


}
