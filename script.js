window.addEventListener("DOMContentLoaded", function () {
    const popover = document.getElementById("mypopover");
  
    // Check screen width and set popover content with line breaks
    if (window.innerWidth <= 500) {
      popover.innerHTML = "welcome! click me to begin. also... turn up your volume! (and put your ringer on :) )";
    } else {
      popover.innerHTML = "welcome! click me to begin. use WASD keys to move, arrow keys to pan, and the space bar to jump. also... turn up your volume!";
    }
  //push test
    popover.showPopover();
  
    // Hide the popover when clicked
    popover.addEventListener("click", function () {
      this.hidePopover();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const restartButton = document.getElementById('restartButton');
    restartButton.addEventListener('click', function () {
      location.reload();
    });
  });
  
  