import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FeatureModel } from '../../core/model/feature.model';
import { PressureRegisterComponent } from "../../pressure-register/pressure-register.component";
import { Store } from '@ngrx/store';
import { selectCurrentFeature } from '../../store/features/features.selectors';

@Component({
    selector: 'app-planning',
    standalone: true,
    templateUrl: './planning.component.html',
    styleUrl: './planning.component.scss',
    imports: [CommonModule, FormsModule, NgxMaterialTimepickerModule, PressureRegisterComponent]
})
export class PlanningComponent {

  store = inject(Store);
  model: FeatureModel  = this.store.selectSignal(selectCurrentFeature)();

  feature: string = '';
  actionType: string | null = null;


  isOpenPlanning = false;
  isOpenRegister = false;


  hours: string = '';
  minutes: string = '';
  selectedTime: string | undefined= undefined;
  plannings: string[] = [];

  

  constructor(private route: ActivatedRoute){
    // To extract route param value
    this.route.paramMap.subscribe(
      (params)=> {
        let actionType = params.get('actionType')
        if(actionType){
         this.actionType = actionType;
         if(actionType === 'plan'){
          this.isOpenPlanning = true;
         } else if(actionType === 'register'){
          this.isOpenRegister = true;
         }
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
    return '../../../assets/' + this.model?.bg;
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
