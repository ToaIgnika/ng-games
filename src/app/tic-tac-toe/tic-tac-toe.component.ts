import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './dialogs/result-dialog/result-dialog.component';

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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  makeMove(i:number, j:number) {
    this.board_layout[i][j]=this.turn
    if (this.checkWin(i,j)) {
      this.openResult(false, this.turn)
      // game over! this.turn wins
      this.newGame()
    } else if (this.turn_number == 9) {
      this.openResult(true)
    }
    else {
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
    } 

    if (this.board_layout[0][0] == this.turn &&
    this.board_layout[1][1] == this.turn &&
    this.board_layout[2][2] == this.turn) {
      return true;
    }
    
    if (this.board_layout[0][2] == this.turn &&
    this.board_layout[1][1] == this.turn &&
    this.board_layout[2][0] == this.turn) {
      return true;
    }
 
    return false;
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

  openResult(isDraw: boolean, winner: String = '') {
    this.dialog.open(ResultDialogComponent, {data: {isDraw: isDraw, winner: winner}, width: '450px'}).afterClosed().subscribe(result => {
      this.newGame()
    })
  }

}
