const allCells = document.querySelectorAll(".cell");
const cell1 = document.getElementById("one");
const cell2 = document.getElementById("two");
const cell3 = document.getElementById("three");
const cell4 = document.getElementById("four");
const cell5 = document.getElementById("five");
const cell6 = document.getElementById("six");
const cell7 = document.getElementById("seven");
const cell8 = document.getElementById("eight");
const cell9 = document.getElementById("nine");
//
let player1turn = true;
let isGameOver = false;

const playerFactory = (name, sign) => {
    const getSign = () => sign;
    const getName  = () => name;
    return {name, sign, getSign, getName};
};

const gameboard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const update = () => {
        cell1.textContent = board[0];
        cell2.textContent = board[1];
        cell3.textContent = board[2];
        cell4.textContent = board[3];
        cell5.textContent = board[4];
        cell6.textContent = board[5];
        cell7.textContent = board[6];
        cell8.textContent = board[7];
        cell9.textContent = board[8];
    };
    
    return {
      board,
      update,
    };
  })();

const player1 = playerFactory('Player 1', "X");
const player2 = playerFactory('Player 2', "O");

function placeMarker(sign){
    for(let cell of allCells){
        cell.addEventListener('click', () => {
            cell.textContent = sign;
        })
    }
};

function changeTurn(){
    player1turn = !player1turn;
};

for(let cell of allCells){
    cell.addEventListener('click', () => {
        if(player1turn === true){
            placeMarker(player1.getSign());
            changeTurn();
        }else{
            placeMarker(player2.getSign());
            changeTurn();
        }
    })
}



