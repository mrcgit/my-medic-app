import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@Component({
  selector: 'app-linear-graph',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './linear-graph.component.html',
  styleUrl: './linear-graph.component.scss'
})
export class LinearGraphComponent {
  
  @Input('multi') multi: any[] = [];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Giorno';
  yAxisLabel: string = 'Pressione';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { multi: this.multi });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
