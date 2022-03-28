import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PictureSliderComponent } from './picture-slider.component';

const routes: Routes = [{ path: '', component: PictureSliderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PictureSliderRoutingModule { }
