import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pressure-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pressure-register.component.html',
  styleUrl: './pressure-register.component.scss'
})
export class PressureRegisterComponent {
  pressureMin:  string | undefined;
  pressureMax:  string | undefined;

  save(){
    if(this.pressureMax && this.pressureMin){
      const item = JSON.stringify({'pressureMax': this.pressureMax, 'pressureMin': this.pressureMin, date: new Date()});
      console.log(item);
    }
  }

}
