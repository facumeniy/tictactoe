const allCells = document.querySelectorAll(".cell");
const cell0 = document.getElementById("one");
const cell1 = document.getElementById("two");
const cell2 = document.getElementById("three");
const cell3 = document.getElementById("four");
const cell4 = document.getElementById("five");
const cell5 = document.getElementById("six");
const cell6 = document.getElementById("seven");
const cell7 = document.getElementById("eight");
const cell8 = document.getElementById("nine");
const resetButton = document.getElementById("reset-button");
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
        board[0] = cell0.textContent;
        board[1] = cell1.textContent;
        board[2] = cell2.textContent;
        board[3] = cell3.textContent;
        board[4] = cell4.textContent;
        board[5] = cell5.textContent;
        board[6] = cell6.textContent;
        board[7] = cell7.textContent;
        board[8] = cell8.textContent;
    }

    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    
    return {
      board,
      update,
      winConditions,
    };
  })();

const player1 = playerFactory('Player 1', "X");
const player2 = playerFactory('Player 2', "O");

function changeTurn(){
    player1turn = !player1turn;
};

function checkWin(){
    for(let condition of gameboard.winConditions){
        const cellA = gameboard.board[condition[0]];
        const cellB = gameboard.board[condition[1]];
        const cellC = gameboard.board[condition[2]];

        if(cellA === "" || cellB === "" || cellC === ""){
            continue;
        }
        if(cellA === cellB && cellB === cellC){
            isGameOver = true;
            break;
        }
    }
    if(isGameOver === true){
        for(let cell of allCells){
            cell.classList.add("disable");
        }
    }
 }

for(let cell of allCells){
     cell.addEventListener('click', () => {
        if(player1turn === true){
            cell.textContent = player1.getSign();
            cell.classList.add("player-one");
            changeTurn();
            gameboard.update();
            checkWin();
        }else{
            cell.textContent = player2.getSign();
            cell.classList.add("player-two");
            changeTurn();
            gameboard.update();
            checkWin();
        }
     })
 }

 resetButton.addEventListener('click', () => {
    for(i = 0; i < gameboard.board.length; i++){
        gameboard.board[i] = "";
    }
    
    isGameOver = false;
    player1turn = true;

    for(let cell of allCells){
        cell.textContent = "";
        cell.classList.remove("player-one");
        cell.classList.remove("player-two");
        cell.classList.remove("disable");
    }
 })
