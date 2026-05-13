//3. EventEmitter: The Heart of Node.js
// EventEmitter is a class that facilitates communication between 
// objects. Much of Node’s core (like http servers) is built on
//  top of it.
// on(event, listener): Adds a function that runs every time the
//  named event is triggered.
// emit(event, [args]): Synchronously calls each of the listeners
//  registered for that event name.
// off(event, listener): Removes a specific listener from the 
// event.


const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", () => {
  console.log("Hello");
});

emitter.emit("greet");