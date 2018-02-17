var Word = require('./word.js');
var inquirer = require("inquirer");

var wordBank = ['blue', 'green', 'yellow', 'pink', 'beige']
var selectedWord;
var wordArray = [];
var remainingGuesses;

// randomly select a word from the wordbank
function selectWord() {
  var randNum = Math.floor(Math.random() * 4);
  selectedWord = wordBank[randNum];

  // split the word into an array of characters
  wordArray = selectedWord.split('');

  // Determine the remaining guesses
  remainingGuesses = wordArray.length + 6;
}

selectWord()
                  console.log('selectedWord', selectedWord);

// game header
console.log('~~~~~~~~~~ Hangman: CLI Version ~~~~~~~~~~');
console.log('Can you guess the word?');

function displayGuessesLeft() {
  console.log('You have ' + remainingGuesses + ' guesses left.');
};
displayGuessesLeft()

// use the Word constructor to create the secret word to display in the console
var displayWord = new Word('', wordArray);

// display the secret word
displayWord.assembleWordObjects();


function gamePlay() {
  if (remainingGuesses > 0 && !Word.wordGuessed) {
    // prompt user to guess a letter
    inquirer.prompt([
      {
        name: "guess",
        message: "Type a letter to guess the word"
      }
    ]).then(function(answer) {
      // decrement the remainingGuesses count
      remainingGuesses--;
      displayGuessesLeft()
      // use the Word constructor to create the secret word to display in the console
      var displayWord = new Word(answer.guess, wordArray);

      // display the secret word
      displayWord.assembleWordObjects();
      displayWord.isWordGuessed();
      gamePlay()
    });

  }
  else {
    console.log('Sorry, try again!');
  }


} // close function, gamePlay

gamePlay();
