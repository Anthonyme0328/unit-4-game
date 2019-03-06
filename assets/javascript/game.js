// all my global variables

    var ruby1= Math.floor(Math.random() * (12 - 1) + 1);
    var diamond2= Math.floor(Math.random() * (12 - 1) + 1);
    var emerald3= Math.floor(Math.random() * (12 - 1) + 1);
    var yellowgem4= Math.floor(Math.random() * (12 - 1) + 1);

// win lose counter and a variable for the final score

    var wins = 0;
    var losses = 0;
    var totalScoreAdded;


    function resetVals()
	{
		//reset
		 randNum = Math.floor(Math.random() * (120 - 19) + 19);
		 console.log("randomNumber =  " + randNum);
		 ruby1 = Math.floor(Math.random() * (12 - 1) + 1);
		 diamond2 = Math.floor(Math.random() * (12 - 1) + 1);
		 emerald3 = Math.floor(Math.random() * (12 - 1) + 1);
		 yellowgem4 = Math.floor(Math.random() * (12 - 1) + 1)
		 finalScore = 0;

		 //HTML
		 $("#randomNumberBox").html(randNum);
		 $("#playerScore").html(finalScore);
		 beginGame();
    }
    
    function beginGame()
	{
		 //reset
		 randNum = Math.floor(Math.random() * (120 - 19) + 19);
		 console.log("randomNumber =  " + randNum);
		 crys1 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys2 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys3 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys4 = Math.floor(Math.random() * (12 - 1) + 1)
		 finalScore = 0;

		 //HTML
		 $("#randomNumberBox").html(randNum);
         $("#playerScore").html(finalScore);
    }

    //assigns random number to each gem in the game
		$(".ruby_red").attr("value", ruby1);
        var test = $(".ruby_red").attr("value");
        //Test / Debug
        console.log(".ruby_red" + test);

    $(".diamond_blue").attr("value", diamond2);
    var test = $(".diamond_blue").attr("value");
    //Test / Debug
    console.log(".diamond_blue" + test);

    $(".emerald_green").attr("value", emerald3);
    var test = $(".emerald_green").attr("value");
    //Test / Debug
    console.log(".emerald_green" + test);

    $(".theYellowOne_yellow").attr("value", yellowgem4);
    var test = $(".theYellowOne_yellow").attr("value");
    //Test / Debug
    console.log(".theYellowOne_yellow"+ test);

    //When clicked saves to Final score
        //added the .off() because it will repeat the click twice without it and save the last number that
        // was clicked and push it to the total score during the next game.
    $(".box").off().on("click", function()
    {
        var test1 = $(this).attr('value');
        //Adds to final score when clicked
        finalScore = parseInt(finalScore) + parseInt(test1);
        console.log("Crystal*  " +  test1);
        console.log("finalScore***  " + finalScore);
        $("#playerScore").html(finalScore);

        if(randNum === finalScore)
        {
            win++;
            $("#win").html(win);
            $("#playerScore").html(0);
            resetVals();
            
        }
        else if (finalScore >= randNum)
        {
            loss++;
            $("#loss").html(loss);
            $("#playerScore").html(0);
            resetVals();
        }

    })

    ;

    beginGame()
