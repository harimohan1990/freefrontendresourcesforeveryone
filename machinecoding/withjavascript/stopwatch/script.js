var startTime = 0, elapsedTime = 0, timerInterval;

function startTimer() {
  if (!timerInterval) {  // Prevent multiple intervals
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
      var currentTime = Date.now();
      elapsedTime = currentTime - startTime;
      updateDisplay(elapsedTime);
    }, 10);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null; // Set to null so we can restart correctly
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  updateDisplay(elapsedTime);
}

function updateDisplay(time) {
  var milliseconds = Math.floor((time % 1000) / 10);
  var seconds = Math.floor((time / 1000) % 60);
  var minutes = Math.floor((time / 1000 / 60) % 60);
  var hours = Math.floor((time / 1000 / 60 / 60) % 24);

  var displayTime = hours.toString().padStart(2, '0') + ':' +
                    minutes.toString().padStart(2, '0') + ':' +
                    seconds.toString().padStart(2, '0') + '.' +
                    milliseconds.toString().padStart(2, '0');

  document.querySelector('.display').textContent = displayTime;
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
