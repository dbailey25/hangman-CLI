var Letter = require('./letter.js');

// var wordArray = ['i', 's'];

var Word = function(userLetter, wordArray) {
this.wordArray = wordArray;
this.letter = userLetter
var guessLetter = this.letter
var lettersGuessed = 0;
                console.log('lettersGuessed', lettersGuessed);
var wordGuessed = false;
var secretWordArray = [];
var wordToDisplay = [];
  this.assembleWordObjects = function() {
    // check if the user guess matches a letter in the selected word
    for (var i = 0; i < this.wordArray.length; i++) {
      var wordLetter = this.wordArray[i];
      var checkLetter = new Letter(guessLetter, wordLetter);
      checkLetter.setGuessed();
      if (Letter.guessed) {
        lettersGuessed++;
      };
      secretWordArray.push(checkLetter)

    } // close loop
    wordToDisplay = secretWordArray.join();
    console.log(wordToDisplay);
                    // console.log(secretWordArray);
    // var secretWord = secretWordArray.join();\
    // update the array to be displayed with new letters guessed correctly
    for (var i = 0; i < secretWordArray.length; i++) {
      if (secretWordArray[i].guessed) {
        wordToDisplay.splice(i, 1, secretWordArray[i].userGuess)
      } // close if
      // else {
      //   wordToDisplay.splice(i, 1, '_')
      // } // close else
    } // close loop
                       // console.log(wordToDisplay);
  } // close function, assembleWord
  this.isWordGuessed = function() {
    if (lettersGuessed = this.wordArray.length) {
      wordGuessed = true;
    }
  } // close function, isWordGuessed

} // close Constructor, Word



module.exports = Word;
