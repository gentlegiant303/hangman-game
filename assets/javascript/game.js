var words = ["rose", "beast", "disney", "france", "books", "belle" ];
      var guessesLeft = 9;
  var possibleWord;
  function generateWord(){
    possibleWord = words[Math.floor(Math.random() * words.length)];
  };
  var blankSpaces = [];
  var wins = 0;
  var isStarted = false;

document.getElementById("start").onclick = function() {
  if (isStarted) {
    return;
  }
isStarted = true;
        generateWord();
        var wordLength = possibleWord.length;

document.getElementById("wins").innerHTML = wins;
        for (i = 0; i < wordLength; i++) {
            blankSpaces.push("-");
        }
        document.getElementById("blankSpaces").innerHTML = blankSpaces.join("");
};

      document.onkeypress = function(event) {
        letterGuessed = event.key.toLowerCase();
      for (var i = 0; i<possibleWord.length; i++) {
          if (possibleWord[i]===letterGuessed) {
            blankSpaces[i]=letterGuessed;
          }
          document.getElementById('blankSpaces').innerHTML = blankSpaces.join('');

      }

        document.getElementById("lettersGuessed").innerHTML += letterGuessed;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;


        guessesLeft--;
        if (guessesLeft === -1) {
          return alert("You Loose!");

        }

        if (possibleWord === blankSpaces.join('')) {
          setTimeout(function () {
            alert("Be Our Guest!");
          wins++;
          document.getElementById("wins").innerHTML = wins;
        }, 200);
        }

}

document.getElementById("reset").onclick = function() {
  blankSpaces = [];
  document.getElementById("blankSpaces").innerHTML = blankSpaces
  letterGuessed= "";
document.getElementById("lettersGuessed").innerHTML = letterGuessed;
  generateWord();
  wordLength = possibleWord.length;
  for (i = 0; i < wordLength; i++) {
      blankSpaces.push("-");
  }
  document.getElementById("blankSpaces").innerHTML = blankSpaces.join("");
  guessesLeft = 9;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
};
