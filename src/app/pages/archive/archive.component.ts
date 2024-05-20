import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PressureActions } from '../../store/pressure/pressure.actions';
import { selectPressureParams } from '../../store/pressure/pressure.selectors';
import { CommonModule } from '@angular/common';
import { PressureArchiveComponent } from "../../components/pressure-archive/pressure-archive.component";

@Component({
    selector: 'app-archive',
    standalone: true,
    templateUrl: './archive.component.html',
    styleUrl: './archive.component.scss',
    imports: [CommonModule, PressureArchiveComponent]
})
export class ArchiveComponent {
  store = inject(Store);

  name: string | undefined = undefined
  
  pressure: boolean = false;



  constructor(private route: ActivatedRoute){

    this.route.paramMap.subscribe(
      (params)=> {
        let name = params.get('name')
        if(name){
         this.name = name;
         switch (name) {
          case 'pressione':
            this.pressure = true;
           
            break;
         
          default:
            break;
         }
      
        } else {
          console.error("Errore recupero del parametro")
        }
      }
    )

  }

}
