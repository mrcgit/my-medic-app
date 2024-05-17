import { Component, computed, inject } from '@angular/core';
import { LinearGraphComponent } from "../../linear-graph/linear-graph.component";
import { TabellaGeneraleComponent } from "../../tabella-generale/tabella-generale.component";
import { MedicParameter } from '../../core/model/medic-parameter';
import { Store } from '@ngrx/store';
import { PressureActions } from '../../store/pressure/pressure.actions';
import { selectPressureParams } from '../../store/pressure/pressure.selectors';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [LinearGraphComponent, TabellaGeneraleComponent, CommonModule]
})
export class HomeComponent {

  store = inject(Store);
  pressureParams = this.store.selectSignal(selectPressureParams)();

  constructor(){
    this.store.dispatch(PressureActions.loadPressureParams());
  }


  getPressureModel(){
    return computed(()=>{
     return this.computePressureModel();
    })()
  }


  computePressureModel(): any[] | undefined{

    if(this.pressureParams && this.pressureParams.length > 0){

      const name1 = "sistolica"
      const name2 = "diastolica"
  
      const serie1 = this.pressureParams.map((p) =>{
        return {
            name: p.date,
            value: p.list["sistolica"]
        };
      });
  
      const serie2 = this.pressureParams.map((p)=> {
        return {
          name: p.date,
          value: p.list["diastolica"]
        }
      })
  
      const model = [
        {
          "name": name1,
          "series": serie1
        },
        {
          "name": name2,
          "series": serie2
        }
      ]
      return model;
    }  else {
      return undefined
    }
  }


  getPressureData(){
    return undefined;
  } 

}
