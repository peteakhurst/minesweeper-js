"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var game = function () {
  function game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, game);

    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(game, [{
    key: "playMove",
    value: function playMove(rowIndex, columnIndex) {
      this._board.flipTile(rowIndex, columnIndex);
      if (this._board._playerBoard[rowIndex][columnIndex] === "B") {
        console.log("The Game Is Over");
        this._board.print();
      } else if (!this._board.hasSafeTiles()) {
        console.log("You Win");
      } else {
        console.log("Current Board:");
        this._board.print();
      }
    }
  }]);

  return game;
}();

var Board = function () {
  function Board(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Board);

    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Board, [{
    key: "flipTile",


    // Function to flip the tile

    value: function flipTile(rowIndex, columnIndex) {
      if (this._playerBoard[rowIndex][columnIndex] != '  ') {
        console.log("This tile has already been flipped!");
        return;
      } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
        this._playerBoard[rowIndex][columnIndex] = 'B';
      } else {
        this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
      }
      this._numberOfTiles--;
    }

    // Function to display number of bombs adjacent to the flipped tile

  }, {
    key: "getNumberOfNeighborBombs",
    value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
      var _this = this;

      var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

      var numberOfRows = this._bombBoard.length;
      var numberOfColumns = this._bombBoard[0].length;
      var numberOfBombs = 0;

      neighborOffsets.forEach(function (offset) {
        var neighborRowIndex = rowIndex + offset[0];
        var neighborColumnIndex = columnIndex + offset[1];
        if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
          if (_this._bombBoard[neighborRowIndex][neighborColumnIndex] === "B") {
            _this._numberOfBombs++;
          }
        }
      });
      return this.numberOfBombs;
    }
  }, {
    key: "hasSafeTiles",
    value: function hasSafeTiles() {
      return this._numberOfTiles !== this.numberOfBombs;
    }
  }, {
    key: "print",
    value: function print() {
      console.log(this._playerBoard.map(function (row) {
        return row.join('|');
      }).join('\n'));
    }
  }, {
    key: "playerBoard",
    get: function get() {
      return this._playerBoard;
    }
  }], [{
    key: "generatePlayerBoard",


    // Function accepts the numberOfRows and numberOfColumns and returns a board with that many rows and columns.
    value: function generatePlayerBoard(numberOfRows, numberOfColumns) {

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
    }

    // Function to create bomb board and bombs

  }, {
    key: "generateBombBoard",
    value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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

        var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        if (board[randomRowIndex][randomColumnIndex] !== 'B') {
          board[randomRowIndex][randomColumnIndex] = 'B';
          numberOfBombsPlaced++;
        }
      }
      return board;
    }
  }]);

  return Board;
}();

var g = new game(3, 3, 3);
g.playMove(0, 0);
g.playMove(0, 1);
g.playMove(0, 2);
g.playMove(1, 0);
g.playMove(1, 1);
g.playMove(1, 2);
g.playMove(2, 0);
g.playMove(2, 1);
g.playMove(2, 2);

// Function to flip the tile

// const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
//
//     if(playerBoard[rowIndex][columnIndex] !== ' '){
//         console.log("This tile has already been flipped!");
//         return;
//       } else if(bombBoard[rowIndex][columnIndex] === 'B'){
//           playerBoard[rowIndex][columnIndex] = 'B';
//       }else {
//         playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
//       }
// }


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