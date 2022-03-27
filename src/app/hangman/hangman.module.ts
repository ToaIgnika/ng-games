import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HangmanRoutingModule } from './hangman-routing.module';
import { HangmanComponent } from './hangman.component';


@NgModule({
  declarations: [
    HangmanComponent
  ],
  imports: [
    CommonModule,
    HangmanRoutingModule
  ]
})
export class HangmanModule { }
