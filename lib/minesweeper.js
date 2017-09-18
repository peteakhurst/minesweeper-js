'use strict';

// Function accepts the numberOfRows and numberOfColumns and returns a board with that many rows and columns.
var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {

  var board = [];

  // Creates rows and pushes them into the empty board.
  for (var currentRow = 0; currentRow < numberOfRows; currentRow++) {

    var row = [];

    // Creates columns and pushes them into the empty row.
    for (var currentColumn = 0; currentColumn < numberOfColumns; currentColumn++) {
      row.push(' ');
    }

    // pushes the row to the board
    board.push(row);
  }

  return board;
};

// Function to create bomb board and bombs
var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];

  // Creates rows and pushes them into the empty board.
  for (var currentRow = 0; currentRow < numberOfRows; currentRow++) {
    var row = [];
    // Creates columns and pushes them into the empty row.
    for (var currentColumn = 0; currentColumn < numberOfColumns; currentColumn++) {
      row.push(null);
    }board.push(row);
  }

  var numberOfBombsPlaced = 0;
  // pushes the row to the board


  // right now the loop has the potential to place bombs on top of already existing bombs. will fix later
  while (numberOfBombsPlaced < numberOfBombs) {

    var randomRowIndex = Math.floor(Math.random() * numberOfRows);

    var randomColumnIndex = Math.floor(Math.random() * numberOfRows);
    board[randomRowIndex][randomColumnIndex] = "B";
    numberOfBombsPlaced++;
  }

  return board;
};

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');

printBoard(playerBoard);

console.log('Bomb Board: ');

printBoard(bombBoard);

// console.log(generatePlayerBoard(1,3));
// console.log(generatePlayerBoard(6,3));
// console.log(generatePlayerBoard(5,7));


// Old Code

// const generatePlayerBoard = (board) => {
//
// };

// const printBoard = (board) => {
//   console.log("Current Board:");
//   console.log(board[0].join(' | '));
//   console.log(board[1].join(' | '));
//   console.log(board[2].join(' | '));
// };

// const board = [
//   // this is posiion 0
//   [' ', ' ', ' '],
//   // this is posiion 1
//   [' ', ' ', ' '],
//   // this is posiion 2
//   [' ', ' ', ' ']
// ];
//
// printBoard(board);
// board[0][0] = 1;
// board[2][2] = "B";
//
// printBoard(board);