/* jshint esversion:6*/


const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let coco = new Person("Coco", 1, 3);

elevator.start();
elevator.call(coco);

elevator.floorUp();
console.log(elevator.floorUp);
