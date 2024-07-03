// This defines the  Card class
class Card {     //  This class represents a playing card. Each card has a suit (like Hearts, Diamonds, Clubs, Spades) and a value (like 2, 3, 4, …, Jack, Queen, King, Ace).
    constructor(suit, value) {
      this.suit = suit; // The suit of the card 
      this.value = value;// The value of the card   
    }
  }
  
  // This defines the  Deck class
  class Deck {      // The array to store the cards
    constructor() { //This class represents a deck of cards. The deck is initially empty. It’s filled with 52 cards (13 values for each of the 4 suits) in the constructor. 
      this.deck = [];
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];// These are the four suits
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];// Theses are the thirteen values
  

      // This creates a new card for each suit and value, and adds it to the deck
    
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
  
    // the code below creates a button that is saying when clicked on it will run the game
    document.getElementById('startButton').addEventListener('click', function() {
    
  // Create a new deck and deal cards to each player
    const deck = new Deck();
    const player1 = new Player('Player 1', deck.deal());
    const player2 = new Player('Player 2', deck.deal());
  
    // Play the game
    while (player1.cards.length > 0 && player2.cards.length > 0) {// as long as cards are in players hand the while loop continues 
      
      const card1 = player1.playCard(); // this code player1.cards.length > 0 checks if player 1 still has cards
      const card2 = player2.playCard(); // this code player2.cards.length > 0 checks if player 2 still has cards.
  
      if (card1.value > card2.value) {
        player1.increaseScore();
      } else if (card1.value < card2.value) {
        player2.increaseScore();
      }
    }
  
    // Display the score and declare the winner
    console.log(`Score: ${player1.name} - ${player1.score}, ${player2.name} - ${player2.score}`);
    console.log(`${player1.score > player2.score ? player1.name : player2.name} is the winner!`);
  });
  



