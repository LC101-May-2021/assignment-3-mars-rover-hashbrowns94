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
       message: message.name,
       results: []
    }
    if (message.commands) {
      for (let i = 0; i < message.commands.length; i++) {
        let cmdType = message.commands[i].commandType;
        let cmdVal = message.commands[i].value;
        if (cmdVal && typeof cmdVal != 'number') {
          this.mode = cmdVal;
        }
        if (cmdType === 'STATUS_CHECK') {
          let status = {
            completed: true,
            roverStatus: {
              mode: this.mode, 
              generatorWatts: this.generatorWatts, 
              position: this.position
              }
            }
          msg.results.push(status);
        }
        if (cmdType === 'MODE_CHANGE') {
          let modeStatus = {
            completed: true
          }
          msg.results.push(modeStatus);
        }
        if (cmdType === 'MOVE') {
          if (this.mode === 'LOW_POWER') {
            let moveStatus = {
              completed: false
            }
              msg.results.push(moveStatus);
          } else if (typeof cmdVal === 'number' && this.mode === 'NORMAL') {
              let moveStatus = {
              completed: true
              }
              this.position = cmdVal
              msg.results.push(moveStatus);
          } else if (this.mode === 'NORMAL') {
              let moveStatus = {
              completed: true
              }
            msg.results.push(moveStatus);
          }  
        }
      }
      return msg;
    }
    return msg;
  } 
}

module.exports = Rover;