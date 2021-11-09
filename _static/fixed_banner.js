// When the user scrolls the page, execute fixBanner
window.onscroll = function() {fixBanner()};

// Get the banner
var banner = document.getElementById("deprecationBanner");

// Get the offset position of the navbar
var threshold = banner.offsetTop;

// Add the navbar-fixed-top class to the banner when you reach its scroll
// position. Remove it when you leave the scroll position.
function fixBanner() {
  if (window.pageYOffset > threshold) {
    banner.classList.add("navbar-fixed-top");
  } else {
    banner.classList.remove("navbar-fixed-top");
  }
} 
