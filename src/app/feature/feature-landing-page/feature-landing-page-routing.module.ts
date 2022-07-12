import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureLandingPageComponent } from './feature-landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureLandingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureLandingPageRoutingModule { }
