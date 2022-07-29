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
  didSomeoneWin: false
}

randomizeStarter();

class PlayervsPlayer{
  addToFirstBox(){
    if(ticTacToeTable.firstBox.textContent == "X" || ticTacToeTable.firstBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
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
  }
  addToSecondBox(){
    if(ticTacToeTable.secondBox.textContent == "X" || ticTacToeTable.secondBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
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
    
  }
  addToThirdBox(){
    if(ticTacToeTable.thirdBox.textContent == "X" || ticTacToeTable.thirdBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
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
      
  }
  addToFourthBox(){
    if(ticTacToeTable.fourthBox.textContent == "X" || ticTacToeTable.fourthBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
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
  }
  addToFifthBox(){
    if(ticTacToeTable.fifthBox.textContent == "X" || ticTacToeTable.fifthBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
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
  }
  addToSixthBox(){
    if(ticTacToeTable.sixthBox.textContent == "X" || ticTacToeTable.sixthBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
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
  }
  addToSeventhBox(){
    if(ticTacToeTable.seventhBox.textContent == "X" || ticTacToeTable.seventhBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
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
  }
  addToEighthBox(){
    if(ticTacToeTable.eighthBox.textContent == "X" || ticTacToeTable.eighthBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
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
  }
  addToNinethBox(){
    if(ticTacToeTable.ninethBox.textContent == "X" || ticTacToeTable.ninethBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
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
}

class CPU{
  addToFirstBox(){
    if(ticTacToeTable.firstBox.textContent == "X" || ticTacToeTable.firstBox.textContent == "O"){
      let diffOptions = Math.ceil(Math.random()*4);
      switch(diffOptions){
        case 1: 
          this.addToNinethBox();
        break;

        case 2:
          this.addToSeventhBox();
          break;

        case 3:
          this.addToThirdBox();
          break;

        case 4:
          this.addToFifthBox();
          break;
      }
    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn == false){
          ticTacToeTable.firstBox.textContent = "O";
          playerTurns.playerOneTurn = true;
          winner();
        }
      }
    }
  }
  addToSecondBox(){
    if(ticTacToeTable.secondBox.textContent == "X" || ticTacToeTable.secondBox.textContent == "O"){
      let diffOptions = Math.ceil(Math.random()*4);
      switch(diffOptions){
        case 1: 
          this.addToEighthBox();
        break;

        case 2:
          this.addToFourthBox();
          break;

        case 3:
          this.addToSixthBox();
          break;

        case 4:
          this.addToFifthBox();
          break;
      }
    } 
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn == false){
          ticTacToeTable.secondBox.textContent = "O";
          playerTurns.playerOneTurn = true;
          winner();
        }
      }
    }
  }
  addToThirdBox(){
    if(ticTacToeTable.thirdBox.textContent == "X" || ticTacToeTable.thirdBox.textContent == "O"){
      let diffOptions = Math.ceil(Math.random()*4);
      switch(diffOptions){
        case 1: 
          this.addToNinethBox();
        break;

        case 2:
          this.addToSeventhBox();
          break;

        case 3:
          this.addToFirstBox();
          break;

        case 4:
          this.addToFifthBox();
          break;
      }
    }  
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn == false){
          ticTacToeTable.thirdBox.textContent = "O";
          playerTurns.playerOneTurn = true;
          winner();
        }
      }
    } 
  }
  addToFourthBox(){
    if(ticTacToeTable.fourthBox.textContent == "X" || ticTacToeTable.fourthBox.textContent == "O"){
      let diffOptions = Math.ceil(Math.random()*4);
      switch(diffOptions){
        case 1: 
          this.addToEighthBox();
        break;

        case 2:
          this.addToSixthBox();
          break;

        case 3:
          this.addToSecondBox();
          break;

        case 4:
          this.addToFifthBox();
          break;
      }
    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn == false){
          ticTacToeTable.fourthBox.textContent = "O";
          playerTurns.playerOneTurn = true;
          winner();
        }
      }
    }
  }
  addToFifthBox(){
    if(ticTacToeTable.fifthBox.textContent == "X" || ticTacToeTable.fifthBox.textContent == "O"){
      let diffOptions = Math.ceil(Math.random()*4);
      switch(diffOptions){
        case 1: 
          this.addToFourthBox();
        break;

        case 2:
          this.addToSecondBox();
          break;

        case 3:
          this.addToSixthBox();
          break;

        case 4:
          this.addToEighthBox();
          break;
      }
    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn == false){
          ticTacToeTable.fifthBox.textContent = "O";
          playerTurns.playerOneTurn = true;
          winner();
        }
      }
    }
  }
  addToSixthBox(){
    if(ticTacToeTable.sixthBox.textContent == "X" || ticTacToeTable.sixthBox.textContent == "O"){
      let diffOptions = Math.ceil(Math.random()*3);
      switch(diffOptions){
        case 1: 
          this.addToNinethBox();
        break;

        case 2:
          this.addToThirdBox();
          break;

        case 3:
          this.addToFifthBox();
          break;
      }
    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn == false){
          ticTacToeTable.sixthBox.textContent = "O";
          playerTurns.playerOneTurn = true;
          winner();
        }
      }
    }
  }
  addToSeventhBox(){
    if(ticTacToeTable.seventhBox.textContent == "X" || ticTacToeTable.seventhBox.textContent == "O"){
      let diffOptions = Math.ceil(Math.random()*4);
      switch(diffOptions){
        case 1: 
          this.addToNinethBox();
        break;

        case 2:
          this.addToThirdBox();
          break;

        case 3:
          this.addToFirstBox();
          break;

        case 4:
          this.addToFifthBox();
          break;
      }
    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn == false){
          ticTacToeTable.seventhBox.textContent = "O";
          playerTurns.playerOneTurn = true;
          winner();
        }
      }
    }
  }
  addToEighthBox(){
    if(ticTacToeTable.eighthBox.textContent == "X" || ticTacToeTable.eighthBox.textContent == "O"){
      let diffOptions = Math.ceil(Math.random()*4);
      switch(diffOptions){
        case 1: 
          this.addToFifthBox();
        break;

        case 2:
          this.addToFourthBox();
          break;

        case 3:
          this.addToSixthBox();
          break;

        case 4:
          this.addToSecondBox();
          break;
      }   
    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn == false){
          ticTacToeTable.eighthBox.textContent = "O";
          playerTurns.playerOneTurn = true;
          winner();
        }
      }
    }
  }
  addToNinethBox(){
    if(ticTacToeTable.ninethBox.textContent == "X" || ticTacToeTable.ninethBox.textContent == "O"){
      let diffOptions = Math.ceil(Math.random()*4);
      switch(diffOptions){
        case 1: 
          this.addToThirdBox();
        break;

        case 2:
          this.addToSeventhBox();
          break;

        case 3:
          this.addToFirstBox();
          break;

        case 4:
          this.addToFifthBox();
          break;
      }
    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn == false){
          ticTacToeTable.ninethBox.textContent = "O";
          playerTurns.playerOneTurn = true;
          winner();
        }
      }
    }
  }
}

class PlayervsCPU{
  addToFirstBox(){
    if(ticTacToeTable.firstBox.textContent == "X" || ticTacToeTable.firstBox.textContent == "O"){
      
    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn){
          ticTacToeTable.firstBox.textContent = "X"
          playerTurns.playerOneTurn = false;
          winner();
          let diffOptions = Math.ceil(Math.random()*4);
          switch(diffOptions){
            case 1: 
              cpu.addToNinethBox();
            break;

            case 2:
              cpu.addToSeventhBox();
            break;

            case 3:
              cpu.addToThirdBox();
            break;

            case 4:
              cpu.addToFifthBox();
            break;
          }  
        }
      }
    }
  }
  addToSecondBox(){
    if(ticTacToeTable.secondBox.textContent == "X" || ticTacToeTable.secondBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn){
          ticTacToeTable.secondBox.textContent = "X"
          playerTurns.playerOneTurn = false;
          winner();
          let diffOptions = Math.ceil(Math.random()*4);
          switch(diffOptions){
            case 1: 
              cpu.addToEighthBox();
            break;

            case 2:
              cpu.addToFourthBox();
              break;

            case 3:
              cpu.addToSixthBox();
              break;

            case 4:
              cpu.addToFifthBox();
              break;
          } 
        }
      }
    }
    
  }
  addToThirdBox(){
    if(ticTacToeTable.thirdBox.textContent == "X" || ticTacToeTable.thirdBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn){
          ticTacToeTable.thirdBox.textContent = "X"
          playerTurns.playerOneTurn = false;
          winner();
          let diffOptions = Math.ceil(Math.random()*4);
      switch(diffOptions){
        case 1: 
          cpu.addToNinethBox();
        break;

        case 2:
          cpu.addToSeventhBox();
          break;

        case 3:
          cpu.addToFirstBox();
          break;

        case 4:
          cpu.addToFifthBox();
          break;
      } 
        }
      }
    }
      
  }
  addToFourthBox(){
    if(ticTacToeTable.fourthBox.textContent == "X" || ticTacToeTable.fourthBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn){
          ticTacToeTable.fourthBox.textContent = "X"
          playerTurns.playerOneTurn = false;
          winner();
          let diffOptions = Math.ceil(Math.random()*4);
          switch(diffOptions){
            case 1: 
              cpu.addToEighthBox();
            break;

            case 2:
              cpu.addToSixthBox();
              break;

            case 3:
              cpu.addToSecondBox();
              break;

            case 4:
              cpu.addToFifthBox();
              break;
          } 
        }
      }
    }
  }
  addToFifthBox(){
    if(ticTacToeTable.fifthBox.textContent == "X" || ticTacToeTable.fifthBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn){
          ticTacToeTable.fifthBox.textContent = "X"
          playerTurns.playerOneTurn = false;
          winner();
          let diffOptions = Math.ceil(Math.random()*4);
          switch(diffOptions){
            case 1: 
              cpu.addToFourthBox();
            break;

            case 2:
              cpu.addToSecondBox();
              break;

            case 3:
              cpu.addToSixthBox();
              break;

            case 4:
              cpu.addToEighthBox();
              break;
          } 
        }
      }
    }
  }
  addToSixthBox(){
    if(ticTacToeTable.sixthBox.textContent == "X" || ticTacToeTable.sixthBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn){
          ticTacToeTable.sixthBox.textContent = "X"
          playerTurns.playerOneTurn = false;
          winner();
          let diffOptions = Math.ceil(Math.random()*3);
          switch(diffOptions){
            case 1: 
              cpu.addToNinethBox();
            break;

            case 2:
              cpu.addToThirdBox();
              break;

            case 3:
              cpu.addToFifthBox();
              break;
          } 
        }
      }
    }
  }
  addToSeventhBox(){
    if(ticTacToeTable.seventhBox.textContent == "X" || ticTacToeTable.seventhBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn){
          ticTacToeTable.seventhBox.textContent = "X"
          playerTurns.playerOneTurn = false;
          winner();
          let diffOptions = Math.ceil(Math.random()*4);
          switch(diffOptions){
            case 1: 
              cpu.addToNinethBox();
            break;

            case 2:
              cpu.addToThirdBox();
              break;

            case 3:
              cpu.addToFirstBox();
              break;

            case 4:
              cpu.addToFifthBox();
              break;
          } 
        }
      }
    }
  }
  addToEighthBox(){
    if(ticTacToeTable.eighthBox.textContent == "X" || ticTacToeTable.eighthBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn){
          ticTacToeTable.eighthBox.textContent = "X"
          playerTurns.playerOneTurn = false;
          winner();
          let diffOptions = Math.ceil(Math.random()*4);
          switch(diffOptions){
            case 1: 
              cpu.addToFifthBox();
            break;

            case 2:
              cpu.addToFourthBox();
              break;

            case 3:
              cpu.addToSixthBox();
              break;

            case 4:
              cpu.addToSecondBox();
              break;
          }    
        }
      }
    }
  }
  addToNinethBox(){
    if(ticTacToeTable.ninethBox.textContent == "X" || ticTacToeTable.ninethBox.textContent == "O"){

    }
    else{
      if(playerTurns.didSomeoneWin == false){
        if(playerTurns.playerOneTurn){
          ticTacToeTable.ninethBox.textContent = "X"
          playerTurns.playerOneTurn = false;
          winner();
          let diffOptions = Math.ceil(Math.random()*4);
          switch(diffOptions){
            case 1: 
              cpu.addToThirdBox();
            break;

            case 2:
              cpu.addToSeventhBox();
              break;

            case 3:
              cpu.addToFirstBox();
              break;

            case 4:
              cpu.addToFifthBox();
              break;
          } 
        }
      }
    }
  }
}

const playerPlayer = new PlayervsPlayer;
const playerCPU = new PlayervsCPU;
const cpu = new CPU;

//If CPU wins the randomizeStarter coin flip
if(playerTurns.playerOneTurn == false){
  let randomNum = Math.ceil(Math.random()*9);
  switch(randomNum){
    case 1:
      cpu.addToFirstBox();
      break;
    
    case 2:
      cpu.addToSecondBox();
      break;

      case 3:
        cpu.addToThirdBox();
        break;
      
      case 4:
        cpu.addToFourthBox();
        break;
      
      case 5:
        cpu.addToFifthBox();
        break;
        
      case 6:
        cpu.addToSixthBox();
        break;

      case 7:
        cpu.addToSeventhBox();
        break;
        
      case 8:
        cpu.addToEighthBox();
        break;

      case 9:
        cpu.addToNinethBox();
        break;
  } 
}

//Player vs Player (Need to add button)
//ticTacToeTable.firstBox.addEventListener('click', playerPlayer.addToFirstBox);
//ticTacToeTable.secondBox.addEventListener('click', playerPlayer.addToSecondBox);
//ticTacToeTable.thirdBox.addEventListener('click', playerPlayer.addToThirdBox);
//ticTacToeTable.fourthBox.addEventListener('click', playerPlayer.addToFourthBox);
//ticTacToeTable.fifthBox.addEventListener('click', playerPlayer.addToFifthBox);
//ticTacToeTable.sixthBox.addEventListener('click', playerPlayer.addToSixthBox);
//ticTacToeTable.seventhBox.addEventListener('click', playerPlayer.addToSeventhBox);
//ticTacToeTable.eighthBox.addEventListener('click', playerPlayer.addToEighthBox);
//ticTacToeTable.ninethBox.addEventListener('click', playerPlayer.addToNinethBox);

//Player vs CPU (Default)
ticTacToeTable.firstBox.addEventListener('click', playerCPU.addToFirstBox);
ticTacToeTable.secondBox.addEventListener('click', playerCPU.addToSecondBox);
ticTacToeTable.thirdBox.addEventListener('click', playerCPU.addToThirdBox);
ticTacToeTable.fourthBox.addEventListener('click', playerCPU.addToFourthBox);
ticTacToeTable.fifthBox.addEventListener('click', playerCPU.addToFifthBox);
ticTacToeTable.sixthBox.addEventListener('click', playerCPU.addToSixthBox);
ticTacToeTable.seventhBox.addEventListener('click', playerCPU.addToSeventhBox);
ticTacToeTable.eighthBox.addEventListener('click', playerCPU.addToEighthBox);
ticTacToeTable.ninethBox.addEventListener('click', playerCPU.addToNinethBox);

function randomizeStarter(){
  const randomNum = Math.ceil(Math.random()*2);
  switch(randomNum){
    case 1: 
      playerTurns.playerOneTurn = true;
      break;

    case 2:
      playerTurns.playerOneTurn = false;
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
    playerTurns.didSomeoneWin = true;
  }
  else if(boxFour == "X" && boxFive == "X" && boxSix == "X"){
    console.log("X Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
  else if(boxSeven == "X" && boxEight == "X" && boxNine == "X"){
    console.log("X Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
  else if(boxOne == "X" && boxFour == "X" && boxSeven == "X"){
    console.log("X Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
  else if(boxTwo == "X" && boxFive == "X" && boxEight == "X"){
    console.log("X Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
  else if(boxThree == "X" && boxSix == "X" && boxNine == "X"){
    console.log("X Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
  else if(boxOne == "X" && boxFive == "X" && boxNine == "X"){
    console.log("X Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
  else if(boxThree == "X" && boxFive == "X" && boxSeven == "X"){
    console.log("X Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
  

  if(boxOne == "O" && boxTwo == "O" && boxThree == "O"){
    console.log("O Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
  else if(boxFour == "O" && boxFive == "O" && boxSix == "O"){
    console.log("O Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
  else if(boxSeven == "O" && boxEight == "O" && boxNine == "O"){
    console.log("O Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
  else if(boxOne == "O" && boxFour == "O" && boxSeven == "O"){
    console.log("O Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
  else if(boxTwo == "O" && boxFive == "O" && boxEight == "O"){
    console.log("O Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
  else if(boxThree == "O" && boxSix == "O" && boxNine == "O"){
    console.log("O Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
  else if(boxOne == "O" && boxFive == "O" && boxNine == "O"){
    console.log("O Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
  else if(boxThree == "O" && boxFive == "O" && boxSeven == "O"){
    console.log("O Army Wins!");
    playerTurns.didSomeoneWin = true;
  }
}












