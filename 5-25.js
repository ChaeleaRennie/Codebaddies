/*Rock paper scissors game:
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw! */


const rps = (p1, p2) => {
  let r = 'rock';
  let p = 'paper';
  let s = 'scissors';
  let winner = ''
if((p1 == r && p2 == s) || (p1 == s && p2 == p) || (p1 == p && p2 == r)){
  winner = 'Player 1 won!'
     }else if((p1 == s && p2 ==r) || (p1 == r && p2 == p) || (p1 == p && p2 == s)){
       winner = 'Player 2 won!'
     }else{
       winner = 'Draw!'
     }
    return winner
  }
