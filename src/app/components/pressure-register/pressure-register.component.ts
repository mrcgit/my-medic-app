import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MedicParameter } from '../../core/model/medic-parameter';
import { PressureActions } from '../../store/pressure/pressure.actions';
import { Store } from '@ngrx/store';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pressure-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './pressure-register.component.html',
  styleUrl: './pressure-register.component.scss'
})
export class PressureRegisterComponent {
  pressureMin:  string | undefined;
  pressureMax:  string | undefined;

  store = inject(Store);
  


  save(){
    if(this.pressureMax && this.pressureMin){
      let list: { [key: string]: string } = {};
      list["sistolica"] = this.pressureMax;
      list["diastolica"] = this.pressureMin;

      const item: MedicParameter = {id: "0", name: "pressure", list: list , date: new Date()}
      
      this.store.dispatch(PressureActions.addPressureParam({payload: item}));
      console.log(item);
   
    }
  }


}
