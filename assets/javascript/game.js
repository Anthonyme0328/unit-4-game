// all my global variables
var ruby1 = Math.floor(Math.random() * (12 - 1) + 1);
var diamond2 = Math.floor(Math.random() * (12 - 1) + 1);
var emerald3 = Math.floor(Math.random() * (12 - 1) + 1);
var yellowgem4 = Math.floor(Math.random() * (12 - 1) + 1);

// win lose counter and a variable for the final score
var wins = 0;
var losses = 0;
var totalScoreAdded;

// resets all random values for each game
function resetVals() {
    randNum = Math.floor(Math.random() * (120 - 19) + 19);
    ruby1 = Math.floor(Math.random() * (12 - 1) + 1);
    diamond2 = Math.floor(Math.random() * (12 - 1) + 1);
    emerald3 = Math.floor(Math.random() * (12 - 1) + 1);
    yellowgem4 = Math.floor(Math.random() * (12 - 1) + 1)
    finalScore = 0;

// gives you a new random number at begin of each new game 
    $("#randomNumberBox").html(randNum);
    $("#playerScore").html(finalScore);
    beginGame();
}
// game begining function
function beginGame() {
    randNum = Math.floor(Math.random() * (120 - 19) + 19);
    crys1 = Math.floor(Math.random() * (12 - 1) + 1);
    crys2 = Math.floor(Math.random() * (12 - 1) + 1);
    crys3 = Math.floor(Math.random() * (12 - 1) + 1);
    crys4 = Math.floor(Math.random() * (12 - 1) + 1)
    finalScore = 0;
// sets the number you need to match in the box, give new number at begin of each game
    $("#randomNumberBox").html(randNum);
    $("#playerScore").html(finalScore);
}

//assigns random number to each gem in the game : ruby
$(".ruby_red").attr("value", ruby1);


//assigns random number to each gem in the game : diamond
$(".diamond_blue").attr("value", diamond2);


//assigns random number to each gem in the game : emerald
$(".emerald_green").attr("value", emerald3);


//assigns random number to each gem in the game : the yellow gem
$(".theYellowOne_yellow").attr("value", yellowgem4);



//when clicked saves score and makes it a number
$(".box").on("click", function () {
    var values = $(this).attr('value');
//Adds to the score when clicked
    finalScore = parseInt(finalScore) + parseInt(values);
    $("#playerScore").html(finalScore);

// when your number is equal to the number you need to match gives you 1 win writes it on the page
    if (randNum === finalScore) {
        wins++;
        $("#win").html("wins : " + wins);
        $("#playerScore").html(0);
        resetVals();
    }
// when your number is more than what you need to match adds 1 to lose writes it on the page
    else if (finalScore >= randNum) {
        losses++;
        $("#loss").html("losses : " + losses);
        $("#playerScore").html(0);
        resetVals();
    }

})

    ;
// calls the beginGame function
beginGame()
