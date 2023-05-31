
window.onscroll = function() {
  showScrollToTopButton();
};

function showScrollToTopButton() {
  var scrollToTopButton = document.getElementById("scrollToTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Save scroll position to local storage
function saveScrollPosition() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  localStorage.setItem('scrollPosition', scrollPosition.toString());
}

// Load scroll position from local storage
function loadScrollPosition() {
  const scrollPosition = localStorage.getItem('scrollPosition');
  if (scrollPosition !== null) {
    window.scrollTo(0, parseInt(scrollPosition, 10));
  }
}

// Listen for scroll event and save scroll position
window.addEventListener('scroll', saveScrollPosition);

// Load scroll position on page load
window.addEventListener('load', loadScrollPosition);

 <style> element and add custom cursor style
function setCursorColor() {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = 'html { cursor: url("https://raw.githubusercontent.com/kai9987kai/kai9987kai.github.io/master/cur.png"), auto; }';
  document.head.appendChild(styleElement);
}

// Call the function to set the custom cursor on page load
window.addEventListener('load', setCursorColor);
// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

