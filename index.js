let playerPick = "";
let pcPick = "";
let playerScore = 0;
let pcScore = 0;
let changeImage = document.getElementById("changeImage");
let changeImagePC = document.getElementById("PcChangeImage");

let pick = ["Rock", "Paper", "Scissor"];
let winCount = ["Tie", "Player Wins", "PC Wins"];
let showWin = '';

console.log(`Pick any ${pick}`)

let pcPickCalculation;

function showScore(){
console.log(`Player: ${playerScore}; PC: ${pcScore}`);
}

function changePcImage(){
    if(pcPick == pick[0]){
        changeImagePC.src = "assets/rock.png";
    }
    else if (pcPick == pick[1]){
        changeImagePC.src = "assets/paper.png";
    }
    else if (pcPick == pick[2]){
        changeImagePC.src = "assets/scissor.png";
    }
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
    changeImage.src = "assets/rock.png";
    changeImagePC.src = "assets/rock.png";
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
    changePcImage();
    console.log(`Player Picks ${playerPick}`);
    console.log(`PC Picks ${pcPick}`);
    changeImage.src = "assets/rock.png";

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
    died();
    limit();
};

function playerPickPaper(){
    playerPick = pick[1];
    resetNumber();
    pcPickRange();
    changePcImage();
    console.log(`Player Picks ${playerPick}`);
    console.log(`PC Picks ${pcPick}`);
    changeImage.src = "assets/paper.png";

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
    died();
    limit();
};

function playerPickScissor(){
    playerPick = pick[2];
    resetNumber();
    pcPickRange();
    changePcImage();
    console.log(`Player Picks ${playerPick}`);
    console.log(`PC Picks ${pcPick}`);
    changeImage.src = "assets/scissor.png";

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
    died();
    limit();
};

function updateScorePrint(){
    document.getElementById("playerScore").innerText = `Player Score: ${playerScore}`;
    document.getElementById("pcScore").innerText = `PC Score: ${pcScore}`;

    document.getElementById("playerPick").innerText = `Player picks ${playerPick}`;
    document.getElementById("pcPick").innerText = `PC picks ${pcPick}`;

    document.getElementById("winner").innerText = `Winner: ${showWin}`;
}


function limit(){
    if(playerScore == 5 || pcScore == 5){
        setTimeout(function() {
            if (playerScore == 5) {
                alert("Player Wins! \n Player Score: " + playerScore + " | PC Score: " + pcScore);
            } else {
                alert("PC Wins! \n Player Score: " + playerScore + " | PC Score: " + pcScore);
            }
            resetScore();
        }, 500);
    }
};

function died(){
    if (showWin == winCount[1]){
        //IF PLAYER WINS
        if(playerPick == pick[0]){
            changeImagePC.src = "assets/scissorx.png";
        }
        else if(playerPick == pick[1]) {
            changeImagePC.src = "assets/rockx.png";
        }
        else if(playerPick == pick[2]) {
            changeImagePC.src = "assets/paperx.png";
        }
    } else if(showWin == winCount[2]) {
        //IF PC WINS
        if(playerPick == pick[0]){
            changeImage.src = "assets/rockx.png";
        }
        else if(playerPick == pick[1]) {
            changeImage.src = "assets/paperx.png";
        }
        else if(playerPick == pick[2]) {
            changeImage.src = "assets/scissorx.png";
        }
    }
};
