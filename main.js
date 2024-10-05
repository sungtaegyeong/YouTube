const more = document.querySelector('.more');
const moreSubscribe = document.querySelectorAll('.moreSubscribe');
const less = document.querySelector('.less');

more.addEventListener('click', () => {
  moreSubscribe.forEach((element) => (element.style.display = 'flex'));
  less.style.display = 'flex';
  more.style.display = 'none';
});

less.addEventListener('click', () => {
  moreSubscribe.forEach((element) => (element.style.display = 'none'));
  more.style.display = 'flex';
  less.style.display = 'none';
});
