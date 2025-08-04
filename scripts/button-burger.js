const button = document.getElementById('button-burger');
const menu = document.getElementById('nav-menu');
const main = document.getElementById('main');

button.addEventListener('click', () => {
    button.classList.toggle('active');
    button.classList.toggle('is-cross');
    menu.classList.toggle('active');
    main.classList.toggle('dimmed');
})

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !button.contains(e.target)) {
      menu.classList.remove('active');
      button.classList.remove('active');
      button.classList.remove('is-cross');
      main.classList.remove('dimmed');

    }
});