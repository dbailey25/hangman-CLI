// var word = require('./word.js');
var inquirer = require("inquirer");

var wordBank = ['blue', 'green', 'yellow', 'pink', 'beige']

// randomly select a word from the wordbank
var randNum = Math.floor(Math.random() * 4);
var selectedWord = wordBank[randNum];

// split the word into an array of characters
var wordArray = selectedWord.split('');

// Determine the remaining guesses
var remainingGuesses = wordArray.length + 6;
console.log(remainingGuesses);

// use the Word constructor to create the secret word to display in the console


// display the secret word


// prompt user to guess a letter
inquirer.prompt([
  {
    name: "guess",
    message: "Type a letter to guess the word"
  }
]).then(function(answer) {
  // compare user's guess with the secret word
  var newGuy = new Programmer(answer.guess);
  // display message regarding status of user's guess, re-display secret word and remaining guesses
});
