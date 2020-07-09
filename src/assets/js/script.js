export const navMapsBtn = document.querySelector('.nav__dropdown');
const navMapsDropdownMenu = document.querySelector('.dropdown-menu__list');
const navMapsDropdownMenuWrapper = document.querySelector('.dropdown__wrapper');
export const burgerBtn = document.querySelector('.header__burger');
const headerOverlay = document.querySelector('.header__overlay');
export const headerNavMenu = document.querySelector('.header__nav');

const mottoTextLeft = document.querySelector('.motto__text_left');
const mottoTextRight = document.querySelector('.motto__text_right');

export const moveMottoTextOnLoad = () => {
  mottoTextLeft.classList.add('animate__bounceInLeft');
  mottoTextRight.classList.add('animate__bounceInRight');
};

export const toggleDropdownMaps = () => {
  if (navMapsDropdownMenu.classList.contains('animate__fadeInDown')) {
    navMapsDropdownMenu.classList.remove('animate__fadeInDown');
    animateCSS(navMapsDropdownMenu, 'fadeOutUp').then(() =>
        navMapsDropdownMenuWrapper.style.setProperty('visibility', 'hidden')
      );
  } else {
    navMapsDropdownMenu.classList.remove('animate__fadeOutUp');
    navMapsDropdownMenuWrapper.style.setProperty('visibility', 'visible');
    animateCSS(navMapsDropdownMenu, 'fadeInDown')

  }
};

export const openBurgerMenu = () => {
  headerOverlay.classList.add('open');
  headerNavMenu.classList.add('open');
};

export const closeBurgerMenu = (event) => {
  if (headerNavMenu.classList.contains('open') && !event.target.classList.contains('nav__dropdown')) {
    headerOverlay.classList.remove('open');
    headerNavMenu.classList.remove('open');
  }
};

export const animateCSS = (node, animation, prefix = 'animate__') =>
  new Promise((resolve) => {
    const animationName = `${prefix}${animation}`;
    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd() {
      node.removeEventListener('animationend', handleAnimationEnd);
      resolve('Animation ended');
    }
    node.addEventListener('animationend', handleAnimationEnd);
  });

