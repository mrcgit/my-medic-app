import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MedicParameter } from '../../core/model/medic-parameter';
import { TemperatureActions } from '../../store/temperature/termperature.actions';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'temperature-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './temperature-register.component.html',
  styleUrl: './temperature-register.component.scss'
})
export class TemperatureRegisterComponent {


  temperature:  string | undefined;


  store = inject(Store);
  


  save(){
    if(this.temperature){
      let list: { [key: string]: string } = {};
      list["temperatura"] = this.temperature;

      const item: MedicParameter = {id: "0", name: "temperature", list: list , date: new Date()}
      
      this.store.dispatch(TemperatureActions.addTemperatureParam({payload: item}));
      console.log(item);
   
    }
  }

}
