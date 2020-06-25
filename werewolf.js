//write player names in players array 
const players = ['tyler', 'tom', 'tay', 'roy', 'rob', 'janathan', 'ish'];

//assigns number of werewolves based on number of players
const numberOfWerewolves = players.length < 14 ? 2 : Math.floor(players.length / 5);

//initializes assignment variables
let seer = undefined, healer = undefined, werewolves = [];

//initialize selection pool
let playerSelection = players.slice();

//assigns werwolves to random players and removes them from selection pool
const getWerewolves = () => {
  werewolves = [];
  let remainingWerewolves = numberOfWerewolves;

  while (remainingWerewolves > 0) {
    let randomPlayerIndex = Math.floor(Math.random() * Math.floor(playerSelection.length));

    werewolves.push(playerSelection[randomPlayerIndex]);
    playerSelection.splice(randomPlayerIndex, 1);
    remainingWerewolves -= 1;
  };
};

//assigns seer and removes them from selection pool
const getSeer = () => {
  let randomPlayerIndex = Math.floor(Math.random() * Math.floor(playerSelection.length));

  seer = playerSelection[randomPlayerIndex];
  playerSelection.splice(randomPlayerIndex, 1);
};

//assigns healer and removes them from selection pool
const getHealer = () => {
  let randomPlayerIndex = Math.floor(Math.random() * Math.floor(playerSelection.length));

  healer = playerSelection[randomPlayerIndex];
  playerSelection.splice(randomPlayerIndex, 1);
};

//calls all of the functions above and logs the assignments
const assignGamePlayers = () => {
  //if there aren't enough players, return
  if (players.length < 6) {
    console.log('You need at least seven players!');
    return;
  };
  //invoke above functions
  getWerewolves()
  getSeer()
  getHealer();
  //log the results
  console.log(`werewolves - ${werewolves}`);
  console.log(`the seer is ${seer}`);
  console.log(`the healer is ${healer}`);

};
assignGamePlayers();
