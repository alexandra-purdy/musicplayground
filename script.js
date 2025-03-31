window.addEventListener("DOMContentLoaded", function () {
    const popover = document.getElementById("mypopover");
  
    // Check screen width and set popover content with line breaks
    if (window.innerWidth <= 500) {
      popover.innerHTML = "welcome! click me to begin";
    } else {
      popover.innerHTML = "welcome! click me to begin";
    }
  
    popover.showPopover();
  
    // Hide the popover when clicked
    popover.addEventListener("click", function () {
      this.hidePopover();
    });
  });
  