import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.scss']
})
export class BlackjackComponent implements OnInit {

  deck_suit = [
    'clubs',
    'diamonds',
    'hearts',
    'spades',
  ]
  deck_val = [
    'ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'jack',
    'queen',
    'king',
  ]
  deck: String[] = []

  constructor() { }

  ngOnInit(): void {
    this.buildDeck();
  }

  buildDeck() {
    this.deck = []
    this.deck_suit.forEach(suit => {
      this.deck_val.forEach(val => {
        this.deck.push(`${val}_of_${suit}`)
      })
    });
    console.log(this.deck)
  }
}
