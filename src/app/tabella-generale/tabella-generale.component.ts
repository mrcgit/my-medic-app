import { Component, Input } from '@angular/core';
import { MedicParameter } from '../core/model/medic-parameter';

@Component({
  selector: 'app-tabella-generale',
  standalone: true,
  imports: [],
  templateUrl: './tabella-generale.component.html',
  styleUrl: './tabella-generale.component.scss'
})
export class TabellaGeneraleComponent {

  @Input('pressure-data') pressureData: MedicParameter | undefined= undefined


}
