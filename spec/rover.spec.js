const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // it ('constructor sets position and default values for mode and generatorWatts', function() {
  //   let rover = new Rover(15486);
  //   expect(rover.position).toEqual(15486);
  //   expect(rover.mode).toEqual('NORMAL');
  //   expect(rover.generatorWatts).toEqual(110);
  // });

  it('response returned by receiveMessage contains name of message', function() {
    let rover = new Rover(15486);
    let message = new Message('New message!');
    let output = rover.receiveMessage(message);
    expect(output.name).toEqual(message.name);
  });

  it('response returned by receiveMessage includes two results if two commands are sent in the message', function() {
    let rover = new Rover(15486);
    let message = new Message('New message!', ['MOVE', 'MODE_CHANGE']);
    let output = rover.receiveMessage(message);
    expect(output.results.length === 2).toBeTrue();
  });

  it('responds correctly to status check command', function() {
    
  })

});
