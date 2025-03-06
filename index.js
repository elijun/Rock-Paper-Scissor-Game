let playerPick = "";
let pcPick = "";
let playerScore = 0;
let pcScore = 0;
let pick = ["Rock", "Paper", "Scissor"];
let winCount = ["Tie", "Player Wins", "PC Wins"];
let showWin = '';

console.log(`Pick any ${pick}`)

let pcPickCalculation;

function showScore(){
console.log(`Player: ${playerScore}; PC: ${pcScore}`);
}

function resetNumber(){
    pcPickCalculation =  Math.round(Math.random() * 8 + 1);
}

function pcPickRange(){
    if(pcPickCalculation >= 1 && pcPickCalculation <= 3){
    pcPick = pick[0];
    }

    if(pcPickCalculation >= 4 && pcPickCalculation <= 6){
        pcPick = pick[1];
    }

    if(pcPickCalculation >= 7 && pcPickCalculation <= 9){
        pcPick = pick[2];
    }
}

function resetScore(){
    playerScore = 0;
    pcScore = 0;
    playerPick = "";
    pcPick = "";
    showWin = '';
    console.log("Score reset");
    updateScorePrint();
}

function playerPickRock(){
    playerPick = pick[0];
    resetNumber();
    pcPickRange();
    console.log(`Player Picks ${playerPick}`);
    console.log(`PC Picks ${pcPick}`);

    if(pcPick == "Rock"){
        console.log(winCount[0]);
        showWin = winCount[0];
    }
    else if (pcPick == "Paper"){
        console.log(winCount[2]);
        showWin = winCount[2];
        pcScore += 1;
    }

    else if (pcPick == "Scissor"){
        console.log(winCount[1]);
        showWin = winCount[1];
        playerScore += 1;
    }

    showScore();
    updateScorePrint();
    limit();
};

function playerPickPaper(){
    playerPick = pick[1];
    resetNumber();
    pcPickRange();
    console.log(`Player Picks ${playerPick}`);
    console.log(`PC Picks ${pcPick}`);

    if(pcPick == "Rock"){
        console.log(winCount[1]);
        showWin = winCount[1];
        playerScore += 1;
    }
    else if (pcPick == "Paper"){
        console.log(winCount[0]);
        showWin = winCount[0];
    }

    else if (pcPick == "Scissor"){
        console.log(winCount[2]);
        showWin = winCount[2];
        pcScore += 1;
    }

    showScore();
    updateScorePrint();
    limit();
};

function playerPickScissor(){
    playerPick = pick[2];
    resetNumber();
    pcPickRange();
    console.log(`Player Picks ${playerPick}`);
    console.log(`PC Picks ${pcPick}`);

    if(pcPick == "Rock"){
        console.log(winCount[2]);
        showWin = winCount[2];
        pcScore += 1;
    }
    else if (pcPick == "Paper"){
        console.log(winCount[1]);
        showWin = winCount[1];
        playerScore += 1;
    }

    else if (pcPick == "Scissor"){
        console.log(winCount[0]);
        showWin = winCount[0];
    }

    showScore();
    updateScorePrint();
    limit();
};

function updateScorePrint(){
    document.getElementById("playerScore").innerText = `Player Score: ${playerScore}`;
    document.getElementById("pcScore").innerText = `PC Score: ${pcScore}`;
    document.getElementById("playerPick").innerText = playerPick;
    document.getElementById("pcPick").innerText = pcPick;
    document.getElementById("winner").innerText = `Winner: ${showWin}`;
}

function limit(){
    if(playerScore == 5){
        alert(`Player Wins! \n Player Score: ${playerScore} | PC Score: ${pcScore}`);
        resetScore();
    }
else if(pcScore == 5){
    alert(`PC Wins! \n Player Score: ${playerScore} | PC Score: ${pcScore}`);
        resetScore();
    }
};
