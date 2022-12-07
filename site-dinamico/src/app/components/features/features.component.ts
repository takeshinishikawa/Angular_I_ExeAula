import { FeaturesSectionData } from './../../models/features-section-data.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  @Input () public featuresSectionData!: FeaturesSectionData;
}
