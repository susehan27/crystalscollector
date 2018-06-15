// Each crystal is assigned to random number value
// Random Number will generate a random number at the start of each game
// Wins = 0, Losses = 0
// Every time you click a crystal, it will add to the score according to assigned value
// User wins if score === random number (alert win, +1 win count)
// user loses if score is above random number (alert loss +1 loss count)
// restart game



var randomNumber = Math.floor(Math.random()*100+19);
var crystalNumber = [];
var crystals = [];
var score = 0;
var wins = 0;
var losses = 0;

var startGame = function() {
    wins;
    losses;
    score = 0;
    randomNumber = Math.floor(Math.random()*100+19);

    $("#randomNumber").text(randomNumber);
    $("#score").text(score);
    $(".winloss").text("CLICK ON A CRYSTAL TO START");
    $(".crystals").each(function() {
        crystalNumber = [Math.floor(Math.random()*10+1)];
        crystals.push($(this).attr("data-crystalValue", crystalNumber));
    });
}

$(".crystals").click(function(){
    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    score += crystalValue;
    $("#score").text(score);

    console.log(crystalValue);

    if (score === randomNumber) {
        wins++;
        $("#wins").text(wins);
        $(".winloss").text("WINNER");
        setTimeout(function(){
            startGame();
        }, 1000);
    }
    else if (score >= randomNumber) {
        losses++;
        $("#losses").text(losses);
        $(".winloss").text("LOSER");
        setTimeout(function(){
            startGame();
        }, 1000);
    }
})



    $(document).ready(function() {
        startGame();
    })

