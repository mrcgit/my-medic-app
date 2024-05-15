import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FeatureModel } from '../../core/model/feature.model';
import { PressureRegisterComponent } from "../../pressure-register/pressure-register.component";

@Component({
    selector: 'app-planning',
    standalone: true,
    templateUrl: './planning.component.html',
    styleUrl: './planning.component.scss',
    imports: [CommonModule, FormsModule, NgxMaterialTimepickerModule, PressureRegisterComponent]
})
export class PlanningComponent {

  feature: string = '';
  isOpenPlanning = false;
  isOpenRegister = false;
  hours: string = '';
  minutes: string = '';
  selectedTime: string | undefined= undefined;
  plannings: string[] = [];

  model : FeatureModel =   {
    name: 'Pressione arteriosa', 
    description: 'Pianifica la misura della pressione arteriosa o registra una nuova misurazione.',
    buttons: [{label: 'Registra', action: 'insert-pressure'},{label: 'Pianifica', action: 'planning-pressure'}],
    icon: 'bi bi-balloon-heart',
    bg: 'pressure-misure.jpg',
    planningType: 'time',
  }

  constructor(private route: ActivatedRoute){
    // To extract route param value
    this.route.paramMap.subscribe(
      (params)=> {
        let feature = params.get('feature')
        console.log(feature);
        if(feature){
         this.feature = feature
        } else {
          console.error("Errore recupero selle sezione")
        }
      }
    )
  }

  openPlanning() {
    this.isOpenPlanning = true; 
    this.isOpenRegister = false; 
  }

  openRegister(){
    this.isOpenRegister = true; 
    this.isOpenPlanning = false;
  }

  closePlanning(){
    this.isOpenPlanning = false;
  }

  getBg(){
    return '../../../assets/' + this.model.bg;
  }

  addPlanning(item: string){
    this.plannings.push(item)
  }

  dropItem(index: number){
    this.plannings.splice(index,1);
  }

  hasPlanning(){
    return this.plannings && this.plannings.length > 0
  }

}
