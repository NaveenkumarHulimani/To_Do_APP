// Myfile.js

console.log("Hello world");

// Simple test function
function test() {
  if (console.log.calledWith("Hello world")) {
    console.log("Test Passed");
  } else {
    console.log("Test Failed");
  }
}

// Mock console.log to capture outputs for testing
console.log = (function() {
  const original = console.log;
  const logs = [];
  function mock() {
    logs.push(arguments);
    original.apply(console, arguments);
  }
  mock.calledWith = (msg) => logs.some(log => log.includes(msg));
  mock.restore = () => console.log = original;
  return mock;
})();

test();
