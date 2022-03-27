import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HangmanRoutingModule } from './hangman-routing.module';
import { HangmanComponent } from './hangman.component';
import { MaterialModule } from '../material/material.module';

import { HttpClientModule } from '@angular/common/http';
import { ResultDialogComponent } from './dialogs/result-dialog/result-dialog.component';

@NgModule({
  declarations: [
    HangmanComponent,
    ResultDialogComponent
  ],
  imports: [
    CommonModule,
    HangmanRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class HangmanModule { }
