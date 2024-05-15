import { Component } from '@angular/core';
import { LinearGraphComponent } from "../../linear-graph/linear-graph.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [LinearGraphComponent]
})
export class HomeComponent {
model: any[] = [
  {
    "name": "Max",
    "series": [
      {
        "name": "Lun 07:30",
        "value": 130
      },
      {
        "name": "Lun 12:00",
        "value": 120
      },
      {
        "name": "Lun 20:00",
        "value": 150
      }
    ]
  },

  {
    "name": "Min",
    "series": [
      {
        "name": "Lun 07:30",
        "value": 60
      },
      {
        "name": "Lun 12:00",
        "value": 89
      },
      {
        "name": "Lun 20:00",
        "value": 70
      }
    ]
  }
];

}
