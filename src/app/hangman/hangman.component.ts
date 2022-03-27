import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './dialogs/result-dialog/result-dialog.component';



@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})


export class HangmanComponent implements OnInit {
  keyboard_layout = [
    'qwertyuiop',
    'asdfghjkl',
    'zxcvbnm'
  ]

  word_url = 'https://random-word-api.herokuapp.com/word?number=1'
  dictionary_url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
  wrong_attempt = 0
  word: String[] = []
  display_word: String[] = []
  disabled_letters: String[] = []
  word_origin = ''
  word_description = ''

  

  constructor(private http: HttpClient, public dialog: MatDialog) { 
  }

  ngOnInit(): void {
    this.getNewWord()
  }

  getButtonArray(str:String) {
    return Array.from(str);
  }

  useLetter(letter:String) {
    let check = this.word.includes(letter)
    this.disabled_letters.push(letter)
    if (check) {
      for (let i=0; i<this.word.length; i++) {
        if (this.word[i] == letter) {
          this.display_word[i] = letter
        }
      }
      if (!this.display_word.includes('_')) {
        this.openResult(true, this.word.join(''))
      }
    } else {
      this.wrong_attempt++
      if (this.wrong_attempt == 5) {
        this.openResult(false, this.word.join(''))
      }
    }
  }

  isDisabledLetter(letter:String) {
    return this.disabled_letters.includes(letter)
  }

  getWord() {
    return this.http.get<String[]>(this.word_url);
  }

  getNewWord() {
    this.getWord().subscribe((res:String[]) => {
      this.word = Array.from(res[0]);
      this.display_word = Array(this.word.length).fill('_')
      this.disabled_letters = []
      this.wrong_attempt = 0
      this.getWordInfo().subscribe(dic => {
        if (dic) {
        }
      })
    })
  }

  getWordInfo() {
    return this.http.get<String[]>(this.dictionary_url+this.word.join(''));
  }

  openResult(result: boolean, word: String) {
    this.dialog.open(ResultDialogComponent, {data: {result: result, word: word, origin: this.word_origin, definition: this.word_description}}).afterClosed().subscribe(result => {
      this.getNewWord()
    })
  }
}
