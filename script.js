document.addEventListener("DOMContentLoaded", function () {
  // POPUP LOGIC
  const popover = document.getElementById("mypopover");

  if (window.innerWidth <= 500) {
    popover.innerHTML =
      "welcome! click me to begin. also... turn up your volume! (and put your ringer on :) )";
  } else {
    popover.innerHTML =
      "welcome! click me to begin. use WASD keys to move, arrow keys to pan, and the space bar to jump. also... turn up your volume!";
  }

  popover.showPopover();

  popover.addEventListener("click", function () {
    this.hidePopover();
  });

  // RESTART BUTTON LOGIC
  const restartButton = document.getElementById("restartButton");
  restartButton.addEventListener("click", function () {
    location.reload();
  });
});
