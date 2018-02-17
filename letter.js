
var Letter = function(userGuess, secretLetter) {
  this.userGuess = userGuess;
  var letterGuessed = this.userGuess;
  this.secretLetter = secretLetter;
  var letterChecked = this.secretLetter;
  this.guessed = false;
  this.setGuessed = function() {
      if(letterGuessed === letterChecked) {
        this.guessed = true;
      }
  } // close function, setGuessed
  this.toString = function() {
    if(this.guessed) {
      return this.userGuess;
      this.guessed = true;
  }
    else {
      return '_'
    }
  } // close function, toString

} // close function, Letter


module.exports = Letter;
