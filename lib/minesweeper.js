'use strict';

var printBoard = function printBoard(board) {
  console.log("Current Board:");
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

var board = [
// this is posiion 0
[' ', ' ', ' '],
// this is posiion 1
[' ', ' ', ' '],
// this is posiion 2
[' ', ' ', ' ']];

printBoard(board);
board[0][0] = 1;
board[2][2] = "B";

printBoard(board);