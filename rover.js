const Message = require('./message.js');
const Command = require('./command.js');


class Rover {
   constructor(position) {
     this.position = position;
     this.mode = 'NORMAL';
     this.generatorWatts = 110;
   }
   receiveMessage(message){
     let msg = {
       name: message.name,
       results: message.commands
     }
     return msg;
   }
}

let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', ['MODE_CHANGE', 'LOW_POWER']);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);

console.log(response);

module.exports = Rover;