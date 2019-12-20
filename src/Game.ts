import Player from "./Player";

export default class Game {
  currentPlayerIndex = 0;
  players: Player[] = [];
  marks: string[] = ["X", "O"];
  board: string[] = [];
  gameFinished = false;
  gameWinner: Player | null = null;

  constructor(player1: Player, player2: Player) {
    this.setStartingPlayer(player1, player2);
    this.initializeBoard();
  }

  run(): void {
    while (!this.gameFinished) {
      this.displayBoard(true);
      const currentPlayer: Player = this.players[this.currentPlayerIndex];
      const currentMark: string = this.marks[this.currentPlayerIndex];

      let successfulMove = false;

      do {
        const moveIndex: number = currentPlayer.getMove(this.board);
        successfulMove = this.makeMove(moveIndex, currentMark);
      } while (successfulMove == false);

      this.checkForWin();
      this.currentPlayerIndex = 1 - this.currentPlayerIndex;
    }
  }

  private makeMove(index: number, mark: string): boolean {
    if (index < 0 || index > 8) {
      console.log("Your move is outside the acceptable range.");
      return false;
    }

    if (this.board[index] !== " ") {
      console.log("Cell is already taken.");
      return false;
    }

    this.board[index] = mark;

    return true;
  }

  private checkForWin(): void {
    this.checkForDraw() ||
      this.checkForRowWin() ||
      this.checkForColumnWin() ||
      this.checkForDiagonalWin();
  }

  private setWinner(mark: string): void {
    this.gameFinished = true;

    this.gameWinner = mark == "X" ? this.players[0] : this.players[1];

    this.displayBoard(false);
    console.log(`${this.gameWinner.name} has won the game!`);
  }

  private displayBoard(showIndexes: boolean): void {
    const displayCell = (index: number): string => {
      if (this.board[index] == " " && showIndexes) {
        // we move up the index by 1 to make the cells 1 to 9 instead of 0 to 8
        return (index + 1).toString();
      } else {
        return this.board[index];
      }
    };

    console.log(``);
    console.log(` ${displayCell(0)} | ${displayCell(1)} | ${displayCell(2)} `);
    console.log(`---|---|---`);
    console.log(` ${displayCell(3)} | ${displayCell(4)} | ${displayCell(5)} `);
    console.log(`---|---|---`);
    console.log(` ${displayCell(6)} | ${displayCell(7)} | ${displayCell(8)} `);
  }

  private checkForDraw(): boolean {
    for (let i = 0; i < 9; i += 1) {
      if (this.board[i] == " ") {
        return false;
      }
    }

    this.gameFinished = true;
    this.displayBoard(false);
    console.log("The game is a draw.");
    return true;
  }

  private checkForRowWin(): boolean {
    for (let i = 0; i < 9; i += 3) {
      if (
        this.board[i] == this.board[i + 1] &&
        this.board[i] == this.board[i + 2] &&
        this.board[i] != " "
      ) {
        this.setWinner(this.board[i]);
        return true;
      }
    }

    return false;
  }

  private checkForColumnWin(): boolean {
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i] == this.board[i + 3] &&
        this.board[i] == this.board[i + 6] &&
        this.board[i] != " "
      ) {
        this.setWinner(this.board[i]);
        return true;
      }
    }

    return false;
  }

  private checkForDiagonalWin(): boolean {
    if (
      this.board[0] == this.board[4] &&
      this.board[0] == this.board[8] &&
      this.board[0] != " "
    ) {
      this.setWinner(this.board[0]);
      return true;
    }

    if (
      this.board[2] == this.board[4] &&
      this.board[2] == this.board[6] &&
      this.board[2] != " "
    ) {
      this.setWinner(this.board[2]);
      return true;
    }

    return false;
  }

  private initializeBoard(): void {
    for (let i = 0; i < 9; i++) {
      this.board[i] = " ";
    }
  }

  private setStartingPlayer(player1: Player, player2: Player): void {
    if (Math.random() > 0.5) {
      this.players = [player1, player2];
      player1.mark = "X";
      player2.mark = "O";
    } else {
      this.players = [player2, player1];
      player1.mark = "O";
      player2.mark = "X";
    }

    console.log(`${this.players[0].name} is X and goes first.`);
    console.log(`${this.players[1].name} is O and goes second.`);
  }
}
