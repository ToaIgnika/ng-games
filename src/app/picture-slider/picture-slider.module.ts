import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureSliderRoutingModule } from './picture-slider-routing.module';
import { PictureSliderComponent } from './picture-slider.component';


@NgModule({
  declarations: [
    PictureSliderComponent
  ],
  imports: [
    CommonModule,
    PictureSliderRoutingModule
  ]
})
export class PictureSliderModule { }
