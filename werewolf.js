class Werewolf {
  constructor(players) {
    this.players = players;
    this.numberOfWerewolves = players.length < 14 ? 2 : Math.floor(players.length / 5);
    // this.numberOfWerewolves = Math.floor(players.length / 4); //adds more werewolves per player
    this.seer = undefined;
    this.healer = undefined;
    this.werewolves = [];
  }

  getWerewolves = () => {
    return new Promise((resolve, reject) => {
      //reset array during each invocation
      setTimeout(() => {
        this.werewolves = [];
        let remainingWerewolves = this.numberOfWerewolves, playersCopy = this.players.slice();
  
        while (remainingWerewolves > 0) {
          let randomPlayerIndex = Math.floor(
            Math.random() * Math.floor(playersCopy.length)
          );
  
          this.werewolves.push(playersCopy[randomPlayerIndex]);
          playersCopy.splice(randomPlayerIndex, 1);
          remainingWerewolves -= 1;
        }

        resolve(playersCopy);
        reject(new Error('something went wrong in getting werewolves'));
      }, 1000);
    });
  };

  getSeer = (playersCopy) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let randomPlayerIndex = Math.floor(Math.random() * Math.floor(playersCopy.length));
  
        this.seer = playersCopy[randomPlayerIndex];
        playersCopy.splice(randomPlayerIndex, 1);
  
        resolve(playersCopy);
        reject(new Error('something went wrong in getting seer'));
      }, 1000);
    });
  };

  getHealer = (playersCopy) => {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        let randomPlayerIndex = Math.floor(Math.random() * Math.floor(playersCopy.length));
        this.healer = playersCopy[randomPlayerIndex];
        playersCopy.splice(randomPlayerIndex, 1);

        resolve(playersCopy);
        reject(new Error('something went wrong in getting healer'));
      }, 1000);
    });
  };

  getCurrentRoles = () => {
    console.log(`werewolves - ${this.werewolves}`);
    console.log(`the seer is ${this.seer}`);
    console.log(`the healer is ${this.healer}`);
  }

  assignGamePlayers = () => {
    if (this.players.length < 6) {
      console.log('You need at least seven players!');
      return;
    }
    this.getWerewolves()
      .then((results) => {
        this.getSeer(results).then((results) => {
          this.getHealer(results).then(() => {
            console.log(`werewolves - ${this.werewolves}`);
            console.log(`the seer is ${this.seer}`);
            console.log(`the healer is ${this.healer}`);
          });
        });
      })
      .catch((err) => {
        console.log('there was an err -->', err);
      });
  };
}
