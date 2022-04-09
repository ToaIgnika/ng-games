import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hangman',
    loadChildren: () => import('./hangman/hangman.module').then(m => m.HangmanModule)
  },
  {
    path: 'tic-tac-toe',
    loadChildren: () => import('./tic-tac-toe/tic-tac-toe.module').then(m => m.TicTacToeModule)
  },
  {
    path: 'picture-slider',
    loadChildren: () => import('./picture-slider/picture-slider.module').then(m => m.PictureSliderModule)
  },
  {
    path: 'blackjack',
    loadChildren: () => import('./blackjack/blackjack.module').then(m => m.BlackjackModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
