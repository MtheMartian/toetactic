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


class XPlayer{
  constructor(){
    this.firstBox = ticTacToeTable.firstBox.addEventListener('click', this.addToFirstBox);
    this.secondBox = ticTacToeTable.secondBox.addEventListener('click', this.addToSecondBox);
    this.thirdBox = ticTacToeTable.thirdBox.addEventListener('click', this.addToThirdBox);
    this.fourthBox = ticTacToeTable.fourthBox.addEventListener('click', this.addToFourthBox);
    this.fifthBox = ticTacToeTable.fifthBox.addEventListener('click', this.addToFifthBox);
    this.sixthBox = ticTacToeTable.sixthBox.addEventListener('click', this.addToSixthBox);
    this.seventhBox = ticTacToeTable.seventhBox.addEventListener('click', this.addToSeventhBox);
    this.eighthBox = ticTacToeTable.eighthBox.addEventListener('click', this.addToEighthBox);
    this.ninethBox = ticTacToeTable.ninethBox.addEventListener('click', this.addToNinethBox);
  }
  addToFirstBox(){
    ticTacToeTable.firstBox.textContent = "X"
  }
  addToSecondBox(){
    ticTacToeTable.secondBox.textContent = "X"
  }
  addToThirdBox(){
    ticTacToeTable.thirdBox.textContent = "X"
  }
  addToFourthBox(){
    ticTacToeTable.fourthBox.textContent = "X"
  }
  addToFifthBox(){
    ticTacToeTable.fifthBox.textContent = "X"
  }
  addToSixthBox(){
    ticTacToeTable.sixthBox.textContent = "X"
  }
  addToSeventhBox(){
    ticTacToeTable.seventhBox.textContent = "X"
  }
  addToEighthBox(){
    ticTacToeTable.eighthBox.textContent = "X"
  }
  addToNinethBox(){
    ticTacToeTable.ninethBox.textContent = "X"
  }
}

class OPlayer{

}

let playerOne = new XPlayer();
playerOne.firstBox;
playerOne.secondBox;
playerOne.thirdBox;
playerOne.fourthBox;
playerOne.fifthBox;
playerOne.sixthBox;
playerOne.seventhBox;
playerOne.eighthBox;
playerOne.ninethBox;

let playerTwo = new OPlayer;



