import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.scss'
})
export class PlanningComponent {
  feature: string = '';
  model =   {
    name: 'Pressione arteriosa', 
    description: 'Pianifica la misura della pressione arteriosa o registra una nuova misurazione.',
    buttons: [{label: 'Registra', action: 'insert-pressure'},{label: 'Pianifica', action: 'planning-pressure'}],
    icon: 'bi bi-balloon-heart',
    bg: 'pressure-misure.jpg'
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

  getBg(){
    return '../../../assets/' + this.model.bg;
  }

}
