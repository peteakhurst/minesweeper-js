// Function accepts the numberOfRows and numberOfColumns and returns a board with that many rows and columns.
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {

  let board = [];

  // Creates rows and pushes them into the empty board.
  for (let currentRow = 0; currentRow < numberOfRows; currentRow++) {

    let row = [];

      // Creates columns and pushes them into the empty row.
      for (let currentColumn = 0; currentColumn < numberOfColumns; currentColumn++){
        row.push(' ');
      }

      // pushes the row to the board
      board.push(row);

  }

  return board;


};

console.log(generatePlayerBoard(1,3));
console.log(generatePlayerBoard(6,3));
console.log(generatePlayerBoard(5,7));














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
