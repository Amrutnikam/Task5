let targetDate; // Set the target date for the countdown (change this to your desired date and time)
let interval;

function updateCountdown() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining in milliseconds
  const timeRemaining = targetDate - now;

  // Check if the countdown is over
  if (timeRemaining < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "Countdown over!";
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the element with id "countdown"
  document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

document.getElementById("startBtn").addEventListener("click", function() {
  // Set the target date for the countdown (change this to your desired date and time)
  targetDate = new Date();
  targetDate.setMinutes(targetDate.getMinutes() + 15); // Example: 15 minutes countdown

  clearInterval(interval);
  interval = setInterval(updateCountdown, 1000);
});

document.getElementById("stopBtn").addEventListener("click", function() {
  clearInterval(interval);
});

document.getElementById("resetBtn").addEventListener("click", function() {
  clearInterval(interval);
  document.getElementById("countdown").innerHTML = "";
});
