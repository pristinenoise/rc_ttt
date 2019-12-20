import readlineSync from "readline-sync";
import Player from "./Player";

export default class HumanPlayer extends Player {
  constructor(name: string) {
    super(name);
  }

  getMove(board: string[]): number {}
}
