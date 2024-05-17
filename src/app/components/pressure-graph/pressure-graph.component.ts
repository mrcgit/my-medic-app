import { Component, inject } from '@angular/core';
import { LinearGraphComponent } from "../../linear-graph/linear-graph.component";
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectPressureGraphModel } from '../../store/pressure/pressure.selectors';

@Component({
    selector: 'app-pressure-graph',
    standalone: true,
    templateUrl: './pressure-graph.component.html',
    styleUrl: './pressure-graph.component.scss',
    imports: [LinearGraphComponent, CommonModule]
})
export class PressureGraphComponent {

store = inject(Store);
pressureModel = this.store.selectSignal(selectPressureGraphModel)();

}
