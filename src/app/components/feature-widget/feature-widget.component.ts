import { Component, Input, OnInit, inject } from '@angular/core';
import { FeatureModel } from '../../core/model/feature.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { FeatureActions } from '../../store/features/features.actions';

@Component({
  selector: 'app-feature-widget',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feature-widget.component.html',
  styleUrl: './feature-widget.component.scss'
})
export class FeatureWidgetComponent implements OnInit{

  @Input('model') model: FeatureModel | undefined;

  store = inject(Store);

  icon: string = '';

  buttonIndex: number | undefined = undefined;

  ngOnInit(): void {
    this.icon = this.model ? this.model.icon : '';
  }

  selectButton(){
    this.store.dispatch(FeatureActions.setCurrentFeature({payload: this.model!}));
  }

  
  

 

}
