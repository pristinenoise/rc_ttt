// Abstract class for a Player
// Right now, we only implement a human player, but we could
// use other Player classes for different interfaces or AI
export default abstract class Player {
  name: string;
  mark: string | null = "";

  constructor(name: string) {
    this.name = name;
  }

  abstract getMove(board: string[]): number;
}
