// main file for running a tic-tac-toe game

import readlineSync from "readline-sync";
import Player from "./Player";
import HumanPlayer from "./HumanPlayer";
import Game from "./Game";

function createPlayer(playerID: string): Player {
  const name = readlineSync.question(`What is player ${playerID}'s name? `);

  return new HumanPlayer(name);
}

console.log("Welcome to Tic-Tac-Toe!");

// create two human players
const player1 = createPlayer("1");
const player2 = createPlayer("2");

// create game and run it
const game = new Game(player1, player2);
game.run();
