// var wordArray = ['i', 's'];

var Letter = function(userGuess, secretLetter) {
  this.userGuess = userGuess;
  var letterGuessed = this.userGuess;
  this.secretLetter = secretLetter;
  var letterChecked = this.secretLetter;
  var guessed = false;
  this.setGuessed = function() {
    // console.log('running setGuessed');
    // console.log('letterGuessed', letterGuessed);
    // console.log('letterChecked', letterChecked);
      if(letterGuessed === letterChecked) {
        guessed = true;
      }
  } // close function, setGuessed
  this.toString = function() {
    if(guessed) {
      // console.log(this.letter);
      return this.userGuess;
      guessed = true;
  }
    else {
      // console.log('_');
      return '_'
    }

  } // close function, toString

} // close function, Letter






// var checkLetter = new Letter('t');
// checkLetter.setGuessed();
// checkLetter.toString();
// checkLetter.guessed = true;
// checkLetter.toString();

module.exports = Letter;
