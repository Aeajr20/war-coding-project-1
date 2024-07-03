// This defines the  Card class
class Card {
    constructor(suit, value) {
      this.suit = suit;
      this.value = value;
    }
  }
  
  // This defines the  Deck class
  class Deck {
    constructor() {
      this.deck = [];
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  
      for (let suit of suits) {
        for (let value of values) {
          this.deck.push(new Card(suit, value));
        }
      }
      //  this will shuffle the deck
      this.deck.sort(() => Math.random() - 0.5);
    }
  
    //  this code will deal 26 cards to each player
    deal() {
      return this.deck.splice(0, 26);
    }
  }
  
  // This code defines the Player class
  class Player {
    constructor(name, cards) {
      this.name = name;
      this.cards = cards;
      this.score = 0;
    }
  
    // This plays a card
    playCard() {
      return this.cards.shift();
    }
  
    // This will Increase score
    increaseScore() {
      this.score++;
    }
  }
  
  // this will create a new deck and deal cards to each player
  const deck = new Deck();
  const player1 = new Player('Player 1', deck.deal());
  const player2 = new Player('Player 2', deck.deal());
  
  // Play the game
  while (player1.cards.length > 0 && player2.cards.length > 0) {
    const card1 = player1.playCard();
    const card2 = player2.playCard();
  
    if (card1.value > card2.value) {
      player1.increaseScore();
    } else if (card1.value < card2.value) {
      player2.increaseScore();
    }
  }
  
  // this Displays the score and declares the winner in the console
  console.log(`Score: ${player1.name} - ${player1.score}, ${player2.name} - ${player2.score}`);
  console.log(`${player1.score > player2.score ? player1.name : player2.name} is the winner!`);
  