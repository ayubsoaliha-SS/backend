//  process.nextTick() vs. setImmediate()
// process.nextTick(): Executes immediately after the 
// current operation completes,
//  before the event loop continues to the next phase.
//   It’s the "fastest" way to run something asynchronously.
// setImmediate(): Designed to execute a script once the 
// current Event Loop phase (the "poll" phase) is completed.


process.nextTick(() => {
  console.log("nextTick");
});

setImmediate(() => {
  console.log("setImmediate");
});