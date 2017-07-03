/* jshint esversion:6*/

class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.MINFLOOR = 0;
    this.requests = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = "up";
  }

  start() {
    let intervalId = setInterval(() => {
      this.update();
    }, 1000);
  }


  stop() {
    clearInterval(intervalId);
  }

  update() {
    this.log();
  }

  _passengersEnter() {}

  _passengersLeave() {}

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
    } else {
      this.floor = this.floor;
    }
  }

  floorDown() {
    if (this.floor > this.MINFLOOR) {
      this.floor--;
    } else {
      this.floor = this.floor;
    }
  }



  call(newPerson) {
    this.requests.push(newPerson);
    this.waitingList.push(newPerson);
    var index = this.requests.findIndex(function(e){ return e.index == requests.index;});
    if(index != -1){
      this.requests.splice(index,1);
      requests.destroy();
  }


  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
    // console.log(this.direction);
  }
}

module.exports = Elevator;
