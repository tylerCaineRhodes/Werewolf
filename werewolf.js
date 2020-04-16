//write player names in players array 

const players = [
  
];
const numberOfWerewolves = players.length < 14 ? 2 : Math.floor(players.length / 5);
let seer = undefined;
let healer = undefined;
let werewolves = [];


const getWerewolves = () => {
  let remainingWerewolves = numberOfWerewolves;

  while(remainingWerewolves > 0) {
    let randomPlayerIndex = Math.floor(Math.random() * Math.floor(players.length));

    werewolves.push(players[randomPlayerIndex]);
    players.splice(randomPlayerIndex, 1)
    remainingWerewolves-=1;
  }
}


const getSeer = () => {
  let randomPlayerIndex = Math.floor(Math.random() * Math.floor(players.length));
  
  seer = players[randomPlayerIndex];
  players.splice(randomPlayerIndex, 1)
}


const getHealer = () => {
  let randomPlayerIndex = Math.floor(Math.random() * Math.floor(players.length));

  healer = players[randomPlayerIndex];
  players.splice(randomPlayerIndex, 1)
};


const assignGamePlayers = () => {
  if(players.length < 6) {
    console.log('You need at least seven players!')
    return;
  }
  getWerewolves();
  getSeer();
  getHealer();
  console.log(`werewolves - ${werewolves}`)
  console.log(`the seer is ${seer}`)
  console.log(`the healer is ${healer}`)
}
assignGamePlayers()
