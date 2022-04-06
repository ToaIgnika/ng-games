import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureSliderRoutingModule } from './picture-slider-routing.module';
import { PictureSliderComponent } from './picture-slider.component';
import { MaterialModule } from '../material/material.module';
import { ResultDialogComponent } from './dialogs/result-dialog/result-dialog.component';


@NgModule({
  declarations: [
    PictureSliderComponent,
    ResultDialogComponent
  ],
  imports: [
    CommonModule,
    PictureSliderRoutingModule,
    MaterialModule
  ]
})
export class PictureSliderModule { }
