// class example
function crystalOneNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var counter = 0;

function computerChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var targetNumber = computerChoice(19, 120);

$("#number-to-guess").text(targetNumber);


$(".crystal-image").on("click", function() {
    // from class example
    var crystalOne = crystalOneNumber(1, 12);
    console.log("variable for crystal 1 " + crystalOne);
    counter += 1;
    alert("My value is " + crystalOne + ". You've clicked me " + counter + " times!");
    // current woe: score is changing each time and not constant
  
if (counter === targetNumber) {
    alert("You win!");
  } else
  if (counter >= targetNumber) {
    alert("ugh...too much");
  };


});


  