import { Component, OnInit, inject } from '@angular/core';
import { FeatureWidgetComponent } from "../../components/feature-widget/feature-widget.component";
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectFeatures } from '../../store/features/features.selectors';

@Component({
    selector: 'app-features',
    standalone: true,
    templateUrl: './features.component.html',
    styleUrl: './features.component.scss',
    imports: [FeatureWidgetComponent, CommonModule]
})
export class FeaturesComponent {
  title: string = "Funzionalità";

  store = inject(Store);

  features$ = this.store.selectSignal(selectFeatures);
  


}
