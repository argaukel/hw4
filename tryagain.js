$(document).ready(function() {


function computerChoice(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
var random = computerChoice(19, 120);
$("#numberToGet").text("Number to reach: " + random);

var userTotal= 0;    
var crystalValues = {};
crystalValues[1] = Math.floor(Math.random()*12+1);
crystalValues[2] = Math.floor(Math.random()*12+1);
crystalValues[3] = Math.floor(Math.random()*12+1);
crystalValues[4] = Math.floor(Math.random()*12+1);

var userTotal= 0;
var wins = 0;
var losses = 0;




function reset() {
    random = Math.floor(Math.random()*102+19);
    console.log(random);
    $("#numberToGet").text("Number to reach: " + random);
    var num1 = Math.floor(Math.random()*12+1);
    var num2 = Math.floor(Math.random()*12+1);
    var num3 = Math.floor(Math.random()*12+1);
    var num4 = Math.floor(Math.random()*12+1);
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
    userTotal = 0;
    $("#score").text("Your current score: " + userTotal);
}



function getCrystalHandler(crystalKey) {
    return function() {
     userTotal = userTotal + crystalValues[crystalKey];
     console.log("New userTotal " + userTotal);
     $("#score").text("Your current score: " + userTotal);
 
     if (userTotal === random) {
         winner()
        //  wins++;
        //  $("#numberWins").text("Number of wins: " + wins);
     }
 
     else if (userTotal > random) {
         loser()
        //  losses++;
        //  $("#numberLosses").text("Number of losses: " + losses);
     } 
 }
 }
 
 $("#crystal1").on("click", getCrystalHandler(1));
 $("#crystal2").on("click", getCrystalHandler(2));
 $("#crystal3").on("click", getCrystalHandler(3));
 $("#crystal4").on("click", getCrystalHandler(4));

 function winner() {
    alert("You Won!!");
    wins++;
    $("#numberWins").text("Number of wins: " + wins);
    reset();
}

function loser() {
    alert("You Lose!!");
    losses++;
    $("#numberLosses").text("Number of losses: " + losses);
    reset();
}

})