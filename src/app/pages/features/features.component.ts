import { Component } from '@angular/core';
import { FeatureWidgetComponent } from "../../components/feature-widget/feature-widget.component";
import { FeatureModel } from '../../core/model/feature.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-features',
    standalone: true,
    templateUrl: './features.component.html',
    styleUrl: './features.component.scss',
    imports: [FeatureWidgetComponent, CommonModule]
})
export class FeaturesComponent {
  title: string = "Funzionalità";

  features: FeatureModel[] = [{
    name: 'Pressione arteriosa', 
    description: 'Pianifica la misura della pressione arteriosa o registra una nuova misurazione.',
    buttons: [{label: 'Registra', action: 'insert-pressure'},{label: 'Pianifica', action: 'planning-pressure'}],
    icon: 'bi bi-balloon-heart',
    bg: 'pressure-misure',
    planningType: 'time',
    }];

}
