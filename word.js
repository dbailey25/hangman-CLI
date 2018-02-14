var Letter = require('./Letter.js');

var wordArray = ['i', 's'];

var Word = function(userLetter, wordArray) {
this.wordArray = wordArray;
this.letter = userLetter
var guessLetter = this.letter
  var secretWordArray = [];
  this.assembleWord = function() {
    for (var i = 0; i < this.wordArray.length; i++) {
      var wordLetter = this.wordArray[i];
      var checkLetter = new Letter(guessLetter, wordLetter);
      checkLetter.setGuessed();
      secretWordArray.push(checkLetter)
    }
    var secretWord = secretWordArray.join();
    console.log(secretWord);
  }

}

// new Word(wordArray);
var displayWord = new Word('s', wordArray);



displayWord.assembleWord()
