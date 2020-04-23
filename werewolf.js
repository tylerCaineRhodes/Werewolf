//write player names in players array 
const players = [];
const numberOfWerewolves = players.length < 14 ? 2 : Math.floor(players.length / 5);
let seer = undefined, healer = undefined, werewolves = [];


const getWerewolves = (cb) => {
  werewolves = [];
  let remainingWerewolves = numberOfWerewolves, playerSelection = players.slice();

  while (remainingWerewolves > 0) {
    let randomPlayerIndex = Math.floor(Math.random() * Math.floor(playerSelection.length));

    werewolves.push(playerSelection[randomPlayerIndex]);
    playerSelection.splice(randomPlayerIndex, 1)
    remainingWerewolves -= 1;

    cb(playerSelection)
  }
}


const getSeer = (playerSelection, cb) => {
  let randomPlayerIndex = Math.floor(Math.random() * Math.floor(playerSelection.length));

  seer = playerSelection[randomPlayerIndex];
  playerSelection.splice(randomPlayerIndex, 1)

  cb(playerSelection)
}


const getHealer = (playerSelection) => {
  let randomPlayerIndex = Math.floor(Math.random() * Math.floor(playerSelection.length));

  healer = playerSelection[randomPlayerIndex];
  playerSelection.splice(randomPlayerIndex, 1)
};


const assignGamePlayers = () => {
  if (players.length < 6) {
    console.log('You need at least seven players!')
    return;
  }
  getWerewolves((results) => {
    getSeer(results, (results) => {
      getHealer(results)
    })
  })
  console.log(`werewolves - ${werewolves}`)
  console.log(`the seer is ${seer}`)
  console.log(`the healer is ${healer}`)
}
assignGamePlayers()
