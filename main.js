'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
/*const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;*/

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }

  /* document.getElementById('home').style.opacity = String(
    1 - window.scrollY / homeHeight
  );

  home.style.opacity = String(1 - window.scrollY / homeHeight); */
});

// Handle scrolling when tapping on the navbar menu

/*function moveSection(sectionName) {
  sectionName = '#' + sectionName;
  let location = document.querySelector(sectionName).offsetTop;
  window.scrollTo({ top: location - 60, behavior: 'smooth' });
}*/

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Handle click on "Contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  scrollIntoView(link);
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  /*document.getElementById('home').style.opacity = String(
      1 - window.scrollY / homeHeight
    );*/

  home.style.opacity =
    1 -
    (window.scrollY > homeHeight ? homeHeight : window.scrollY) / homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUP = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUP.classList.add('visible');
  } else {
    arrowUP.classList.remove('visible');
  }
});

// Handle Click on the "arrow up" button
arrowUP.addEventListener('click', (event) => {
  scrollIntoView('#home');
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return null;
  }
  projectContainer.classList.add('anim-out');

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
