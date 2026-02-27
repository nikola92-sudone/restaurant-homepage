import './style.css';

import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const content = document.querySelector('#content');

function clearContent() {
  content.textContent = '';
}

document.querySelector('#homeBtn').addEventListener('click', () => {
  clearContent();
  loadHome();
});

document.querySelector('#menuBtn').addEventListener('click', () => {
  clearContent();
  loadMenu();
});

document.querySelector('#contactBtn').addEventListener('click', () => {
  clearContent();
  loadContact();
});