//write player names in array 
const players = [];

const numberOfWerewolves = players.length < 14 ? 2 : Math.floor(players.length / 5);
let seer = undefined;
let healer = undefined;
let werewolves = [];


const getWerewolves = new Promise((resolve, reject) => {
  let remainingWerewolves = numberOfWerewolves;

  while(remainingWerewolves > 0) {
    let randomPlayerIndex = Math.floor(Math.random() * Math.floor(players.length));

    werewolves.push(players[randomPlayerIndex]);
    players.splice(randomPlayerIndex, 1)
    remainingWerewolves-=1;
  }
  resolve(players);
  reject(new Error('something went wrong in getting werewolves'))
})


const getSeer = new Promise((resolve, reject) => {
  let randomPlayerIndex = Math.floor(Math.random() * Math.floor(players.length));

  seer = players[randomPlayerIndex];
  players.splice(randomPlayerIndex, 1)

  resolve(players)
  reject(new Error('something went wrong in getting seer'))
})


const getHealer = new Promise((resolve, reject) => {
    let randomPlayerIndex = Math.floor(Math.random() * Math.floor(players.length));

    healer = players[randomPlayerIndex];
    players.splice(randomPlayerIndex, 1)

    resolve(players)
    reject(new Error('something went wrong in getting healer'))
})


const assignGamePlayers = () => {
  if(players.length < 6) {
    console.log('You need at least seven players!')
    return;
  }
  getWerewolves.then(() => {
    getSeer.then(() => {
      getHealer.then(() => {
        console.log(`werewolves - ${werewolves}`)
        console.log(`the seer is ${seer}`)
        console.log(`the healer is ${healer}`)
      })
    })
  })
}
assignGamePlayers()
