import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {
  board_layout = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]

  turn = 'x'
  turn_number = 1

  constructor() { }

  ngOnInit(): void {
  }

  makeMove(i:number, j:number) {
    this.board_layout[i][j]=this.turn
    if (this.checkWin(i,j) || this.turn_number == 9) {
      alert('game over!')
      // game over! this.turn wins
      this.newGame()
    } else {
      this.turn = this.turn == 'x' ? 'o' : 'x'
      this.turn_number++
    }
  }

  checkWin(i:number, j:number) {
    var row_result = this.board_layout[i].every( (val, i, arr) => val === this.turn )
    var col = this.board_layout.map(function(value,index) { return value[j]; });
    var col_result = col.every( (val, i, arr) => val === this.turn)

    if (row_result || col_result) {
      // console.log('true')
      return true
    } else {
      // console.log('false')
      return false
    }
  }


  newGame() {
    this.turn = 'x'
    this.turn_number = 1
    this.board_layout = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ]
  }

}
