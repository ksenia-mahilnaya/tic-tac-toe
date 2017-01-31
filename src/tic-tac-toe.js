class TicTacToe {
    constructor() {
        this.rowIndex = 0;
        this.columnIndex = 0;
        this.currentValue = 'x';
        this.pointer = true;
        this.matrix = new Array();
        for (var i = 0; i < 3; i++) {
          this.matrix[i] = new Array();
          for (var j = 0; j < 3; j++) {
            this.matrix[i][j] = null;
         }
        }
    }

    getCurrentPlayerSymbol() {
        return this.currentValue;
    }

    nextTurn(rowIndex, columnIndex) {

        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;

        if (this.matrix[this.rowIndex][this.columnIndex] === null) {

            this.matrix[this.rowIndex][this.columnIndex] = this.currentValue;

            if (this.pointer) {
                this.currentValue = 'o';
                this.pointer = false;
            } else {
                this.currentValue = 'x';
                this.pointer = true;
            }
        }
    }

    isFinished() {

        if ((this.getWinner() !== null) || (this.isDraw())) {
          return true;
        }
        return false;
    }

    getWinner() {
        var winnerExists = false;

        for (var i = 0; i < 3; i++) {
          if ((this.matrix[i][0] === this.matrix[i][1]) && (this.matrix[i][1] === this.matrix[i][2]) && (this.matrix[i][0] !== null)) {
          return this.matrix[i][0];
          winnerExists = true;
          break;
          }
        }

        for (var j = 0; j < 3; j++) {
          if ((this.matrix[0][j] === this.matrix[1][j]) && (this.matrix[1][j] === this.matrix[2][j]) && (this.matrix[2][j] !== null)) {
          return this.matrix[0][j];
          winnerExists = true;
          break;
          }
        }

          if ((this.matrix[0][0] === this.matrix[1][1]) && (this.matrix[1][1]  === this.matrix[2][2]) && (this.matrix[2][2] !== null)) {
          return this.matrix[0][0];
          winnerExists = true;
        }

        if ((this.matrix[2][0] === this.matrix[1][1]) && (this.matrix[1][1]  === this.matrix[0][2]) && (this.matrix[0][2] !== null)) {
        return this.matrix[2][0];
        winnerExists = true;
        }

        if (!winnerExists) {
          return null;
        }
    }

    noMoreTurns() {
        loop:
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 3; j++) {

            if (this.matrix[i][j] === null ) {

              return false;
              break loop;
            }
          }
        }
        return true;
      }

    isDraw() {
        var noEmptyCells = true;

        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 3; j++) {
            if (this.matrix[i][j] === null) {
                noEmptyCells = false;
                break;
              }
            }
          }

        if ((this.getWinner() === null) && (noEmptyCells)) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        this.rowIndex = rowIndex;
        this.columnIndex = colIndex;

        return this.matrix[this.rowIndex][this.columnIndex];
    }

}

module.exports = TicTacToe;
