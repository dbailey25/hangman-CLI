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
  this.assembleWord = function() {
    for (var i = 0; i < this.wordArray.length; i++) {
      var wordLetter = this.wordArray[i];
      var checkLetter = new Letter(guessLetter, wordLetter);
      checkLetter.setGuessed();
      if (Letter.guessed) {
        lettersGuessed++;
      };
      secretWordArray.push(checkLetter)
    }
    var secretWord = secretWordArray.join();
    console.log(secretWord);
  } // close function, assembleWord
  this.isWordGuessed = function() {
    if (lettersGuessed = this.wordArray.length) {
      wordGuessed = true;
    }
  } // close function, isWordGuessed

}



module.exports = Word;
