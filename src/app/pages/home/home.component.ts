import { Component } from '@angular/core';
import { LinearGraphComponent } from "../../linear-graph/linear-graph.component";
import { TabellaGeneraleComponent } from "../../tabella-generale/tabella-generale.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [LinearGraphComponent, TabellaGeneraleComponent]
})
export class HomeComponent {
model: any[] = [
  {
    "name": "Max",
    "series": [
      {
        "name": "sab 09:00",
        "value": 160
      },
      {
        "name": "sab 14:00",
        "value": 150
      },
      {
        "name": "sab 20:00",
        "value": 140
      },
      {
        "name": "dom 09:00",
        "value": 140
      },
      {
        "name": "dom 14:00",
        "value": 140
      },
      {
        "name": "dom 20:00",
        "value": 140
      }
    ]
  },

  {
    "name": "Min",
    "series": [
      {
        "name": "sab 09:00",
        "value": 80
      },
      {
        "name": "sab 14:00",
        "value": 90
      },
      {
        "name": "sab 20:00",
        "value": 90
      },
      {
        "name": "dom 09:00",
        "value": 85
      },
      {
        "name": "dom 14:00",
        "value": 80
      },
      {
        "name": "dom 20:00",
        "value": 70
      }
    ]
  }
];

}
