import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './dialogs/result-dialog/result-dialog.component';

@Component({
  selector: 'app-picture-slider',
  templateUrl: './picture-slider.component.html',
  styleUrls: ['./picture-slider.component.scss']
})
export class PictureSliderComponent implements OnInit {
  imgIndex = [1,2,3,4,5,6,7,8,9,10,11,0]
  imgIndexX = [
    1,2,3,4,
    5,6,7,8,
    9,10,11,0]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.shuffle()
  }

  moveSquare(i:number) {
    if (i-1 >= 0 && this.imgIndexX[i-1] == 0) {
      this.swap(i, i-1)
    } else if (i+1 <= 11 && this.imgIndexX[i+1] == 0) {
      this.swap(i, i+1)
    } else if (i+4 <= 11 &&this.imgIndexX[i+4] == 0) {
      this.swap(i, i+4)
    } else if (i-4 >= 0 && this.imgIndexX[i-4] == 0) {
      this.swap(i, i-4)
    } else {
    }
    if (this.isSorted(this.imgIndexX)) {
      this.showResult();
    }
  }

  swap(i:number,j:number) {
    let temp = this.imgIndexX[i];
      this.imgIndexX[i] = 0;
      this.imgIndexX[j] = temp;
  }

  isSorted(arr:number[]) {
    for(let i = 0; i < arr.length-2; i++) {
      if (arr[i+1]-arr[i] != 1) {
        return false;
      }
    }
    return true;
  }

  shuffle() {
    let temp = JSON.parse(JSON.stringify(this.imgIndex))
    let newId = []
    while (temp.length > 0) {
      let id = Math.floor(Math.random()*(temp.length-1))
      newId.push(temp[id])
      temp.splice(id, 1)
    }
    this.imgIndexX = newId
  }

  showResult() {
    this.dialog.open(ResultDialogComponent, { width: '450px'}).afterClosed().subscribe(result => {
      this.shuffle()
    })
  }

}
