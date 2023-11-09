// 1. page layout
// 2. styling (crop header image some more)(color scheme)(button size)(font size) (background color for game container)
// 3.  button for player images and submit button
// 4. maybe highlight or pop out the area that has been chosen (maybe just on hover)
// 5. computer needs to generate rock paper or scissors 
    let computer = ["Rock", "Paper", "Scissors"]
    let i = Math.floor(Math.random() * computer.length)
    computerAnswer = computer[i]
    console.log(computerAnswer)
/* 6. Player makes a choice. get the value of the choice to compare to the computer "String" */

    let button 
    function buttonCheck(buttonvalue){
        button = buttonvalue
        console.log(button)
    }

    function arrayPop(){
        computer.pop()
    }

    computerScore = ["3", "2", "1"]
    playerScore = ["3", "2", "1"]

    // 7. alert saying if player has won or lost  (when game is lost say paper covers rock, rock smashes scissors, scissors cut paper)
    // 8. a way to reset the game after a choice without refreshing score 
    function gameResults(){
        
        if (button === computerAnswer){
            alert(`It Is A Draw!`)
            window.location.reload()
        } else if (button === "Rock" && computerAnswer === "Paper"){
            document.getElementById("submit").innerHTML = (`Paper covers rock! Try Again!`)
            document.getElementById("computer-score").innerHTML = computerScore.pop()
            computerAnswer = "Scissors"
            console.log(computerAnswer)
            
        } else if (button === "Paper" && computerAnswer === "Scissors"){
            document.getElementById("submit").innerHTML = (`Scissors cut paper! Try Again!`)
            document.getElementById("computer-score").innerHTML = computerScore.pop()
            computerAnswer = " Rock"
            console.log(computerAnswer)

        } else if (button === "Scissors" && computerAnswer === `Rock`){
            document.getElementById("submit").innerHTML = (`Rock smashes scissors! Try Again!`)
            document.getElementById("computer-score").innerHTML = computerScore.pop()
            computerAnswer = "Paper"
            console.log(computerAnswer)

        } else if(button === "Rock" && computerAnswer === "Scissors"){
            document.getElementById("submit").innerHTML = (`Yes! Rock smashes scissors! Go Again!`)
            document.getElementById("player-score").innerHTML = playerScore.pop()
            computerAnswer = "Paper"
            console.log(computerAnswer)

        } else if(button === "Scissors" && computerAnswer === "Paper"){
            document.getElementById("submit").innerHTML = (`Yes! Scissors cut paper! Go Again!`)
            document.getElementById("player-score").innerHTML = playerScore.pop()
            computerAnswer = "Rock"
            console.log(computerAnswer)

        } else if(button === "Paper" && computerAnswer === "Rock"){
            document.getElementById("submit").innerHTML = (`Yes! Paper covers rock! Go Again!`)
            document.getElementById("player-score").innerHTML = playerScore.pop()
            computerAnswer = "Scissors"
            console.log(computerAnswer)

        } else{
            document.getElementById("submit").innerHTML = (`Please, Click a button!`)
        }
        }

        // 9. only three rounds and then game is refreshed
    function gameWinOrLose(){
        if(computerScore == computerScore.length){
            alert(`Game Over! Better Luck Next Time!`)
            window.location.reload()
        } else if(playerScore == playerScore.length){
            alert(`You Win!!!! Would You Like To Try Again?`)
            window.location.reload()
        }
    }

    function rockSelect(){
        document.getElementById("rock").style.border = 'solid 10px teal'
     }

     function paperSelect(){
        document.getElementById("paper").style.border = 'solid 10px teal'
     }

     function scissorsSelect(){
         document.getElementById("scissors").style.border = 'solid 10px teal'
     } 


    function textReset(){
        document.getElementById("submit").innerHTML = (`...`)
    }

// 10. display players choice and computer's choice  (maybe two box areas with pics. highlight computer's choice
//     after player has guessed, as well as player's guess. )
// Maybe Not!!





