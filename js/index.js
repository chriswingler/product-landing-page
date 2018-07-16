let main = document.getElementById('main');

let innerHeightDividedBy10 = window.innerHeight / 10;

let nav = document.getElementById('nav-bar')

setInterval(() => {
  if (main.scrollTop > innerHeightDividedBy10) {
      nav.classList.add('nav-scrolled');
      } else if (main.scrollTop < innerHeightDividedBy10) {
        nav.classList.remove('nav-scrolled');
      }
}, 10)