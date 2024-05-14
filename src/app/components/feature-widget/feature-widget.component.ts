import { Component, Input, OnInit } from '@angular/core';
import { FeatureModel } from '../../core/model/feature.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-feature-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-widget.component.html',
  styleUrl: './feature-widget.component.scss'
})
export class FeatureWidgetComponent implements OnInit{

  @Input('model') model: FeatureModel | undefined;

  icon: string = '';

  buttonIndex: number | undefined = undefined;

  ngOnInit(): void {
    this.icon = this.model ? this.model.icon : '';
  }

  selectButton(idx: number){
    this.buttonIndex = idx;
  }

  
  

 

}
