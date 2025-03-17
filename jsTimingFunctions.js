console.log("Timing Events");

/*setTimeout(() => {
  console.log("Set Timeout called once after time interval");
}, 5000); //delaying function logic 5000 milli seconds */

let intervalDetails = "";
intervalDetails = setInterval(() => {
  console.log("Time Interval Done");
}, 5000);

setTimeout(() => {
  clearInterval(intervalDetails);
  console.log("Interval Processing Done");
}, 15000);

let intervalCount = 0;
let timeoutCount = 0;

function intervalFunction() {
  intervalCount++;
  console.log(`Interval tick: ${intervalCount}`);
  if (intervalCount === 5) {
    clearInterval(intervalId);
  }
}

function timeoutFunction() {
  timeoutCount++;
  console.log(`Timeout tick: ${timeoutCount}`);
  if (timeoutCount === 3) {
    clearTimeout(timeoutId);
  }
}

const intervalId = setInterval(intervalFunction, 1000);
const timeoutId = setTimeout(timeoutFunction, 500);
console.log("Start");

//What will be the output
/*
Output:
  Start
  Timeout tick: 1
  Interval tick: 1
  Interval tick: 2
  Interval tick: 3
  Interval tick: 4
  Interval tick: 5
*/
