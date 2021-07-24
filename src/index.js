'use strict';

const toggle = document.querySelector('.menu-toggle');
const navHeader = document.querySelectorAll('.nav__link--header');

for (let i = 0; i < navHeader.length; i++) {
  navHeader[i].addEventListener('click', () => {
    toggle.checked = false;
  });
}
