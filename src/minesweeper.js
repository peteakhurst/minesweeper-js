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


// Function to create bomb board and bombs
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];

  // Creates rows and pushes them into the empty board.
  for (let currentRow = 0; currentRow < numberOfRows; currentRow++) {
    let row = [];
      // Creates columns and pushes them into the empty row.
      for (let currentColumn = 0; currentColumn < numberOfColumns; currentColumn++){
        row.push(null);
      } board.push(row);

  }

  let numberOfBombsPlaced = 0;
    // pushes the row to the board


// right now the loop has the potential to place bombs on top of already existing bombs. will fix later
  while(numberOfBombsPlaced < numberOfBombs) {
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);

      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      if(board[randomRowIndex][randomColumnIndex] !== 'B'){
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
        }
      return board;
  }
}


  // Function to display number of bombs adjacent to the flipped tile

  const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
    const neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ]

        const numberOfRows = bombBoard.length;
        const numberOfColumns = bombBoard[0].length;
        let numberOfBombs = 0;

        neighborOffsets.forEach(offset => {
            const neighborRowIndex = rowIndex + offset[0];
            const neighborColumnIndex = columnIndex + offset[1];

              if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){

                if(bombBoard[neighborRowIndex][neighborColumnIndex] == "B"){
                    playerBoard[rowIndex][columnIndex] === "B" ;
                }
            }
        });
        return numberOfBombs;
    };




// Function to flip the tile

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {

    if(playerBoard[rowIndex][columnIndex] !== ' '){
        console.log("This tile has already been flipped!");
        return;
      } else if(bombBoard[rowIndex][columnIndex] === 'B'){
          playerBoard[rowIndex][columnIndex] = 'B';
      }else {
        playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
      }
};

const printBoard = (board) => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard,bombBoard,0,1);
console.log('Updated Player Board: ');
printBoard(playerBoard);















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
