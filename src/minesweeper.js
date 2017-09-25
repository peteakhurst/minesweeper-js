class game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs){
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }
  playMove(rowIndex, columnIndex){
      this._board.flipTile(rowIndex, columnIndex);
      if (this._board._playerBoard[rowIndex][columnIndex] === "B"){
      console.log("The Game Is Over");
      this._board.print();
    } else if (!this._board.hasSafeTiles()){
      console.log("You Win");
    } else{
      console.log("Current Board:")
      this._board.print();
    }
  }
}

class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs){
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {
      return this._playerBoard;
  }


    // Function to flip the tile

  flipTile(rowIndex, columnIndex) {
      if(this._playerBoard[rowIndex][columnIndex] != '  '){
          console.log("This tile has already been flipped!");
          return;
        }else if(this._bombBoard[rowIndex][columnIndex] === 'B'){
            this._playerBoard[rowIndex][columnIndex] = 'B';
        }else {
          this._playerBoard[rowIndex][columnIndex] =
            this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        }
        this._numberOfTiles--;
      }

      // Function to display number of bombs adjacent to the flipped tile

        getNumberOfNeighborBombs(rowIndex, columnIndex) {
        const neighborOffsets = [
          [-1, -1],
          [-1, 0],
          [-1, 1],
          [0, -1],
          [0, 1],
          [1, -1],
          [1, 0],
          [1, 1]
        ];

            const numberOfRows = this._bombBoard.length;
            const numberOfColumns = this._bombBoard[0].length;
            let numberOfBombs = 0;

            neighborOffsets.forEach(offset => {
                const neighborRowIndex = rowIndex + offset[0];
                const neighborColumnIndex = columnIndex + offset[1];
                  if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
                    if(this._bombBoard[neighborRowIndex][neighborColumnIndex] === "B"){
                        this._numberOfBombs++;
                    }
                }
            });
            return this.numberOfBombs;
        };

        hasSafeTiles() {
          return this._numberOfTiles !== this.numberOfBombs;
        }

        print(){
            console.log(this._playerBoard.map(row => row.join('|')).join('\n'));
        };

        // Function accepts the numberOfRows and numberOfColumns and returns a board with that many rows and columns.
        static generatePlayerBoard(numberOfRows, numberOfColumns){

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

        }

        // Function to create bomb board and bombs
        static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
        }
      return board;
    }
}

const g = new game(3, 3, 3);
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
