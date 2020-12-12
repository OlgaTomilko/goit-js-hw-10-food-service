import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  toggle: document.querySelector('#theme-switch-toggle'),
};

refs.toggle.addEventListener('change', onToggle);

onLoad();

function onLoad() {
  const currentTheme = localStorage.getItem('theme');

  currentTheme
    ? refs.body.classList.add(currentTheme)
    : refs.body.classList.add(Theme.LIGHT);

  if (currentTheme === Theme.DARK) refs.toggle.setAttribute('checked', true);
}

function onlocalStorage() {
  refs.body.classList.contains(Theme.DARK)
    ? localStorage.setItem('theme', Theme.DARK)
    : localStorage.setItem('theme', Theme.LIGHT);
}

function onToggle() {
  refs.body.classList.toggle(Theme.DARK);
  onlocalStorage();
}
