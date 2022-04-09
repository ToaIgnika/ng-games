import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlackjackRoutingModule } from './blackjack-routing.module';
import { BlackjackComponent } from './blackjack.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    BlackjackComponent
  ],
  imports: [
    CommonModule,
    BlackjackRoutingModule,
    MaterialModule
  ]
})
export class BlackjackModule { }
