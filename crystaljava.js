
// computer number



// variables

var wins = 0;
var losses = 0;
var currentScore = 0;

var directionsText = document.getElementById("directions");
var computerText = document.getElementById("computer-choice");
var userText = document.getElementById("user-score");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

document.onclick = function(_event) {
    console.log("start");

// computer number
    function computerChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var target = computerChoice(19, 120);
console.log("variable for computer choice " + target);

// crystal number

function crystalOneNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var crystalOne = crystalOneNumber(1, 12);
console.log("variable for crystal 1 " + crystalOne);



// for (crystalOne) {
//     var imageCrystal = $("<img>");
//     imageCrystal.addClass("crystal-image");
//     imageCrystal.attr("src", "image/crystal.jpg");
//     imageCrystal.attr("data-crystalvalue", crystalOne);
//     $("#crystals").append(imageCrystal);
// }


}
