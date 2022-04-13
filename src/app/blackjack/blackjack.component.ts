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

  dealer_deck: String[] = []
  player_deck: String[] = []
  
  dealer_score = 0;
  player_score = 0;
  deck_count = 1;

  dealer_break = 16;

  constructor() { }

  ngOnInit(): void {
    this.buildDeck();
  }

  buildDeck() {
    this.deck = []
    for (let i = 0; i < this.deck_count; i++) {
      this.deck_suit.forEach(suit => {
        this.deck_val.forEach(val => {
          this.deck.push(`${val}_of_${suit}`)
        })
      });
    }
  }

  dealCard() {
    let id = Math.floor(Math.random()*(this.deck.length-1))
    let card = this.deck[id]
    this.deck.splice(id, 1)
    
    this.player_deck.push(card);
    
    this.player_score+=this.analyzeCard(card)
    if (this.player_score > 21) {
      alert('BUSTED')
    }

  }
  
  stand() {

  }

  hitPlayer() {

  }

  analyzeCard(card: String) {
    var cardVal = card.substring(0, card.indexOf('_'));
    switch (cardVal) {
      case 'ace': { return 11 }
      case '2': { return 2 }
      case '3': { return 3 }
      case '4': { return 4 }
      case '5': { return 5 }
      case '6': { return 6 }
      case '7': { return 7 }
      case '8': { return 8 }
      case '9': { return 9 }
      case '10': { return 10 }
      case 'jack': { return 10 }
      case 'queen': { return 10 }
      case 'king': { return 10 }
    }
    return 0;
  }

  restart() {
    this.player_deck = []
    this.player_score = 0
  }
}
