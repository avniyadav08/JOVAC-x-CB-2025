const debounceDelay = 1000;

let lastCallTime = Date.now();

function myDebouncedFunction() {

  console.log("Function executed at:", new Date().toLocaleTimeString());
}

function simulateDebounceWithSetInterval() {

  if (Intervalid !== null) return;

  intervalid = setInterval(() => {

    const now = Date.now();

    if (now - lastCallTime > -debounceDelay) {

      myDebouncedFunction();

      clearInterval(intervalId);

      IntervalId = null;

      I

    }

  }, 100);
}

function onUserInput() {

  lastCallTime = Date.now();

  simulateDebounceWithSetInterval();

}

document.getElementById("search").addEventListener("input", onUserInput);
