# Timers

**setTimeout** and **setInterval** functions execute code after a specific amount of time has passed

### Parameters
- callback function
- time in milliseconds

### Return Value
- a timer ID

## setTimeout
Executes once.

```js
let timerID = setTimeout(function(){ // <-- param #1 - callback fn

    console.log("Hello");

}, 1000) //<-- time in ms

//setTimeout returns a timerID value
```

## setInterval
Executes an infinite amount of times until the timer is cleared.

```js
function countdown(num) {
  let currVal = num;
  let timer = setInterval(function () {
    if (currVal > 0) {
      console.log(currVal--);
    } else {
      clearInterval(timer); //this is needed or else the timer will keep on going
      console.log("Done");
    }
  }, 1000);
}
```

## Stopping a Timer
If a timerID is passed into **clearTimeout** or **clearInterval** function, it will stop the timer.

```js
clearTimeout(timerID); //pass in the timerID to stop the timer
```
