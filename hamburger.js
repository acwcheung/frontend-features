const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function () {
  if (searchBox.style.display == 'none') {
    searchBox.style.display = 'block';
  } else {
    searchBox.style.display = 'none';
    
  }
});

menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
  } else {
    slideoutMenu.style.opacity = '1';
  }
})
