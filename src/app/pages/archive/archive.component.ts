import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PressureActions } from '../../store/pressure/pressure.actions';
import { selectPressureParams } from '../../store/pressure/pressure.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent {
  store = inject(Store);

  name: string | undefined = undefined

  pressureParams = this.store.selectSignal(selectPressureParams)();


  constructor(private route: ActivatedRoute){

    this.route.paramMap.subscribe(
      (params)=> {
        let name = params.get('name')
        if(name){
         this.name = name;
         switch (name) {
          case 'pressure':
            this.store.dispatch(PressureActions.loadPressureParams());
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
