document.addEventListener("DOMContentLoaded", function () {
  // POPUP LOGIC
  const popover = document.getElementById("mypopover");

  if (window.innerWidth <= 500) {
    popover.innerHTML =
      "INSTRUCTIONS: (ONE) Allow time for the screen to load, the blue background will turn into the game soon. (TWO) click me to begin, then click the screen again. (THREE) use WASD keys to move, arrow keys to pan, and the space bar to jump. (FOUR) turn up your volume!";
  } else {
    popover.innerHTML =
      "INSTRUCTIONS: (ONE) Allow time for the screen to load, the blue background will turn into the game soon. (TWO) click me to begin, then click the screen again. (THREE) use WASD keys to move, arrow keys to pan, and the space bar to jump. (FOUR) turn up your volume!"
  }

  popover.showPopover();

  popover.addEventListener("click", function () {
    this.hidePopover();
  });

  // restart button logid
  const restartButton = document.getElementById("restartButton");
  restartButton.addEventListener("click", function () {
    location.reload();
  });
});
