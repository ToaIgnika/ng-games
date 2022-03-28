import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {
  board_layout = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
