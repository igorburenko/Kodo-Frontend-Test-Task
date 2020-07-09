import './../assets/js/script'
import {
  headerNavMenu,
  burgerBtn,
  navMapsBtn,
  closeBurgerMenu,
  openBurgerMenu,
  toggleDropdownMaps, moveMottoTextOnLoad
} from '../assets/js/script';

window.onload = function () {
  navMapsBtn.addEventListener('click', toggleDropdownMaps);
  burgerBtn.addEventListener('click', openBurgerMenu);
  headerNavMenu.addEventListener('click', closeBurgerMenu);
  setTimeout(moveMottoTextOnLoad, 500);
};
