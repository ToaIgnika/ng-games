import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { TicTacToeComponent } from './tic-tac-toe.component';
import { MaterialModule } from '../material/material.module';
import { ResultDialogComponent } from './dialogs/result-dialog/result-dialog.component';


@NgModule({
  declarations: [
    TicTacToeComponent,
    ResultDialogComponent
  ],
  imports: [
    CommonModule,
    TicTacToeRoutingModule,
    MaterialModule
  ]
})
export class TicTacToeModule { }
