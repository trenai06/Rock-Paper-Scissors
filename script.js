    let computer = ["Rock", "Paper", "Scissors"]
    let i = Math.floor(Math.random() * computer.length)
    computerAnswer = computer[i]
    console.log(computerAnswer)


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







