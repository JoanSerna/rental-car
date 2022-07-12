import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarFacadeService } from './store/car.facade.service';

@Component({
  selector: 'app-feature-landing-page',
  templateUrl: './feature-landing-page.component.html',
  styleUrls: ['./feature-landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLandingPageComponent {
  constructor(
    private readonly carFacadeService:CarFacadeService
  ){
    this.carFacadeService.getCars();
  }
}
