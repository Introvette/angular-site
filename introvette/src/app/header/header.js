const headerContainer = document.querySelector('.header-container');

// Add an event listener to the window object that fires when the user scrolls
window.addEventListener('scroll', () => {
  // Calculate the distance the user has scrolled from the top of the page
  const scrollDistance = window.scrollY;

  // Change the background color of the header based on the scroll distance
  headerContainer.style.backgroundColor = `white ${scrollDistance / 400})`;
});
