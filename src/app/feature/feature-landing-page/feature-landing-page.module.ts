import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureLandingPageComponent } from './feature-landing-page.component';
import {
  FeatureLandingPageRoutingModule,
} from './feature-landing-page-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import {
  CarDetailComponent,
} from './components/car-detail/car-detail.component';
import { EffectsModule } from '@ngrx/effects';
import { CarEffects } from './store/car.effects';
import { StoreModule } from '@ngrx/store';
import { CAR_FEATURE_KEY, carReducer } from './store/car.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    FeatureLandingPageComponent,
    HeaderComponent,
    CarListComponent,
    CarCardComponent,
    CarDetailComponent,
  ],
  imports: [
    CommonModule,
    FeatureLandingPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    StoreModule.forFeature(CAR_FEATURE_KEY, carReducer),
    EffectsModule.forFeature([CarEffects]),
    ReactiveFormsModule,
    MatToolbarModule,
  ],
})
export class FeatureLandingPageModule {
}
