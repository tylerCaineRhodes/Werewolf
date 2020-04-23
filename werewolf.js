//write player names in array 
const players = ['tyler', 'tay', 'Ish', 'Taylor', 'Tom', 'TechleadTom', 'Tim', 'Eric'];

const numberOfWerewolves = players.length < 14 ? 2 : Math.floor(players.length / 5);
let seer = undefined, healer = undefined, werewolves = [];


const getWerewolves = () => {
  return new Promise((resolve, reject) => {
    //reset array during each invocation
    werewolves = [];
    let remainingWerewolves = numberOfWerewolves, playersCopy = players.slice();

    while (remainingWerewolves > 0) {
      let randomPlayerIndex = Math.floor(Math.random() * Math.floor(playersCopy.length));

      werewolves.push(playersCopy[randomPlayerIndex]);
      playersCopy.splice(randomPlayerIndex, 1)
      remainingWerewolves -= 1;
    }
    resolve(playersCopy);
    reject(new Error('something went wrong in getting werewolves'))
  })
}


const getSeer = (playersCopy) => {
  return new Promise((resolve, reject) => {
    let randomPlayerIndex = Math.floor(Math.random() * Math.floor(playersCopy.length));

    seer = playersCopy[randomPlayerIndex];
    playersCopy.splice(randomPlayerIndex, 1)

    resolve(playersCopy)
    reject(new Error('something went wrong in getting seer'))
  })
}


const getHealer = (playersCopy) => {
  return new Promise((resolve, reject) => {
    let randomPlayerIndex = Math.floor(Math.random() * Math.floor(playersCopy.length));

    healer = playersCopy[randomPlayerIndex];
    playersCopy.splice(randomPlayerIndex, 1)

    resolve(playersCopy)
    reject(new Error('something went wrong in getting healer'))
  })
}


const assignGamePlayers = () => {
  if (players.length < 6) {
    console.log('You need at least seven players!')
    return;
  }

  getWerewolves().then((results) => {
    getSeer(results).then((results) => {
      getHealer(results).then(() => {
        console.log(`werewolves - ${werewolves}`)
        console.log(`the seer is ${seer}`)
        console.log(`the healer is ${healer}`)
      })
    })
  }).catch(err => {
    console.log('there is a poop err -->', err)
  })
}
assignGamePlayers()
