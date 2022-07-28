const ticTacToeTable = {
  firstBox: document.querySelector('#oneOne'),
  secondBox: document.querySelector('#oneTwo'),
  thirdBox: document.querySelector('#oneThree'),
  fourthBox: document.querySelector('#twoOne'),
  fifthBox: document.querySelector('#twoTwo'),
  sixthBox: document.querySelector('#twoThree'),
  seventhBox: document.querySelector('#threeOne'),
  eighthBox: document.querySelector('#threeTwo'),
  ninethBox: document.querySelector('#threeThree')
}

const playerTurns = {
  playerOneTurn: false,
  playerTwoTurn: false
}

randomizeStarter();

class PlayervsPlayer{
  addToFirstBox(){
    if(ticTacToeTable.firstBox.textContent == "X" || ticTacToeTable.firstBox.textContent == "O"){

    }
    else{
      if(playerTurns.playerOneTurn){
        ticTacToeTable.firstBox.textContent = "X"
        playerTurns.playerOneTurn = false;
        winner();
      }
      else{
        ticTacToeTable.firstBox.textContent = "O"
        playerTurns.playerOneTurn = true;
        winner();
      }
    }
  }
  addToSecondBox(){
    if(ticTacToeTable.secondBox.textContent == "X" || ticTacToeTable.secondBox.textContent == "O"){

    }
    else{
      if(playerTurns.playerOneTurn){
        ticTacToeTable.secondBox.textContent = "X"
        playerTurns.playerOneTurn = false;
        winner();
      }
      else{
        ticTacToeTable.secondBox.textContent = "O"
        playerTurns.playerOneTurn = true;
        winner();
      }
    }
    
  }
  addToThirdBox(){
    if(ticTacToeTable.thirdBox.textContent == "X" || ticTacToeTable.thirdBox.textContent == "O"){

    }
    else{
      if(playerTurns.playerOneTurn){
        ticTacToeTable.thirdBox.textContent = "X"
        playerTurns.playerOneTurn = false;
        winner();
      }
      else{
        ticTacToeTable.thirdBox.textContent = "O"
        playerTurns.playerOneTurn = true;
        winner();
      }
    }
      
  }
  addToFourthBox(){
    if(ticTacToeTable.fourthBox.textContent == "X" || ticTacToeTable.fourthBox.textContent == "O"){

    }
    else{
      if(playerTurns.playerOneTurn){
        ticTacToeTable.fourthBox.textContent = "X"
        playerTurns.playerOneTurn = false;
        winner();
      }
      else{
        ticTacToeTable.fourthBox.textContent = "O"
        playerTurns.playerOneTurn = true;
        winner();
      }
    }
  }
  addToFifthBox(){
    if(ticTacToeTable.fifthBox.textContent == "X" || ticTacToeTable.fifthBox.textContent == "O"){

    }
    else{
      if(playerTurns.playerOneTurn){
        ticTacToeTable.fifthBox.textContent = "X"
        playerTurns.playerOneTurn = false;
        winner();
      }
      else{
        ticTacToeTable.fifthBox.textContent = "O"
        playerTurns.playerOneTurn = true;
        winner();
      }
    }
  }
  addToSixthBox(){
    if(ticTacToeTable.sixthBox.textContent == "X" || ticTacToeTable.sixthBox.textContent == "O"){

    }
    else{
      if(playerTurns.playerOneTurn){
        ticTacToeTable.sixthBox.textContent = "X"
        playerTurns.playerOneTurn = false;
        winner();
      }
      else{
        ticTacToeTable.sixthBox.textContent = "O"
        playerTurns.playerOneTurn = true;
        winner();
      }
    }
  }
  addToSeventhBox(){
    if(ticTacToeTable.seventhBox.textContent == "X" || ticTacToeTable.seventhBox.textContent == "O"){

    }
    else{
      if(playerTurns.playerOneTurn){
        ticTacToeTable.seventhBox.textContent = "X"
        playerTurns.playerOneTurn = false;
        winner();
      }
      else{
        ticTacToeTable.seventhBox.textContent = "O"
        playerTurns.playerOneTurn = true;
        winner();
      }
    }
  }
  addToEighthBox(){
    if(ticTacToeTable.eighthBox.textContent == "X" || ticTacToeTable.eighthBox.textContent == "O"){

    }
    else{
      if(playerTurns.playerOneTurn){
        ticTacToeTable.eighthBox.textContent = "X"
        playerTurns.playerOneTurn = false;
        winner();
      }
      else{
        ticTacToeTable.eighthBox.textContent = "O"
        playerTurns.playerOneTurn = true;
        winner();
      }
    }
  }
  addToNinethBox(){
    if(ticTacToeTable.ninethBox.textContent == "X" || ticTacToeTable.ninethBox.textContent == "O"){

    }
    else{
      if(playerTurns.playerOneTurn){
        ticTacToeTable.ninethBox.textContent = "X"
        playerTurns.playerOneTurn = false;
        winner();
      }
      else{
        ticTacToeTable.ninethBox.textContent = "O"
        playerTurns.playerOneTurn = true;
        winner();
      }
    }
  }
}

class PlayervsCPU{
  
}

const playerPlayer = new PlayervsPlayer;

ticTacToeTable.firstBox.addEventListener('click', playerPlayer.addToFirstBox);
ticTacToeTable.secondBox.addEventListener('click', playerPlayer.addToSecondBox);
ticTacToeTable.thirdBox.addEventListener('click', playerPlayer.addToThirdBox);
ticTacToeTable.fourthBox.addEventListener('click', playerPlayer.addToFourthBox);
ticTacToeTable.fifthBox.addEventListener('click', playerPlayer.addToFifthBox);
ticTacToeTable.sixthBox.addEventListener('click', playerPlayer.addToSixthBox);
ticTacToeTable.seventhBox.addEventListener('click', playerPlayer.addToSeventhBox);
ticTacToeTable.eighthBox.addEventListener('click', playerPlayer.addToEighthBox);
ticTacToeTable.ninethBox.addEventListener('click', playerPlayer.addToNinethBox);

function randomizeStarter(){
  const randomNum = Math.ceil(Math.random()*2);
  switch(randomNum){
    case 1: 
      playerTurns.playerOneTurn = true;
      break;

    case 2:
      playerTurns.playerTwoTurn = true;
      break;
  }
}

function winner(){
  const boxOne = ticTacToeTable.firstBox.textContent;
  const boxTwo = ticTacToeTable.secondBox.textContent;
  const boxThree = ticTacToeTable.thirdBox.textContent;
  const boxFour = ticTacToeTable.fourthBox.textContent;
  const boxFive = ticTacToeTable.fifthBox.textContent;
  const boxSix = ticTacToeTable.sixthBox.textContent;
  const boxSeven = ticTacToeTable.seventhBox.textContent;
  const boxEight = ticTacToeTable.eighthBox.textContent;
  const boxNine = ticTacToeTable.ninethBox.textContent;

  if(boxOne == "X" && boxTwo == "X" && boxThree == "X"){
    console.log("X Army Wins!");
  }
  else if(boxFour == "X" && boxFive == "X" && boxSix == "X"){
    console.log("X Army Wins!");
  }
  else if(boxSeven == "X" && boxEight == "X" && boxNine == "X"){
    console.log("X Army Wins!");
  }
  else if(boxOne == "X" && boxFour == "X" && boxSeven == "X"){
    console.log("X Army Wins!");
  }
  else if(boxTwo == "X" && boxFive == "X" && boxEight == "X"){
    console.log("X Army Wins!");
  }
  else if(boxThree == "X" && boxSix == "X" && boxNine == "X"){
    console.log("X Army Wins!");
  }
  else if(boxOne == "X" && boxFive == "X" && boxNine == "X"){
    console.log("X Army Wins!");
  }
  else if(boxThree == "X" && boxFive == "X" && boxSeven == "X"){
    console.log("X Army Wins!");
  }
  

  if(boxOne == "O" && boxTwo == "O" && boxThree == "O"){
    console.log("X Army Wins!");
  }
  else if(boxFour == "O" && boxFive == "O" && boxSix == "O"){
    console.log("X Army Wins!");
  }
  else if(boxSeven == "O" && boxEight == "O" && boxNine == "O"){
    console.log("X Army Wins!");
  }
  else if(boxOne == "O" && boxFour == "O" && boxSeven == "O"){
    console.log("X Army Wins!");
  }
  else if(boxTwo == "O" && boxFive == "O" && boxEight == "O"){
    console.log("X Army Wins!");
  }
  else if(boxThree == "O" && boxSix == "O" && boxNine == "O"){
    console.log("X Army Wins!");
  }
  else if(boxOne == "O" && boxFive == "O" && boxNine == "O"){
    console.log("X Army Wins!");
  }
  else if(boxThree == "O" && boxFive == "O" && boxSeven == "O"){
    console.log("O Army Wins!");
  }
}












