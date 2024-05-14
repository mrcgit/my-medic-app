import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [],
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.scss'
})
export class PlanningComponent {
  feature: string = '';


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

}
