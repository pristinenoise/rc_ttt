export default abstract class Player {
  name: string;
  mark: string | null = "";

  constructor(name: string) {
    this.name = name;
  }

  abstract getMove(board: string[]): number;
}
