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
      const currentPlayer = this.players[this.currentPlayerIndex];
      const currentMark = this.marks[this.currentPlayerIndex];

      let successfulMove = false;
      do {
        const moveIndex = currentPlayer.getMove(moves);
        successfulMove = this.makeMove(moveIndex, currentMark);
      } while (successfulMove == false);

      this.checkForWin();
    }
  }

  private checkForWin(): void {}

  private initializeBoard(): void {
    for (let i = 0; i < 9; i++) {
      this.board[i] = "";
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
