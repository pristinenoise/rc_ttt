import readlineSync from 'readline-sync'
import Player from './Player';
import HumanPlayer from './HumanPlayer';
import Game from './Game';

// start by asking 

console.log("Welcome to Tic-Tac-Toe!");

function createPlayer(playerID: string) : Player {
  const name = readlineSync.question(`What is player ${playerID}'s name? `);
  
  return new HumanPlayer(name);
}


const player1 = createPlayer('1');
const player2 = createPlayer('2');

const game = new Game(player1, player2);
game.run();

