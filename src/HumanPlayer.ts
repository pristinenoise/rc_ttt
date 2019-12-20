import readlineSync from "readline-sync";
import Player from "./Player";

export default class HumanPlayer extends Player {
  constructor(name: string) {
    super(name);
  }

  public getMove(_board: string[]): number {
    let moveIndex = 0;

    while (true) {
      const cell: number = readlineSync.questionInt(
        `${this.name} [${this.mark}], please enter your move: `
      );

      if (cell < 1 || cell > 9) {
        console.log("Please enter a number between 1 and 9");
      } else {
        moveIndex = cell - 1;
        break;
      }
    }

    return moveIndex;
  }
}
