const wave = document.getElementById('wave1');
const canvas = document.getElementById('connectionCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const icons = [
  'fab fa-html5', 'fab fa-css3-alt', 'fab fa-js-square',
  'fab fa-react', 'fab fa-git-alt', 'fab fa-python',
  'fab fa-github', 'fab fa-figma'
];

function createOrbit(iconClass) {
  const orbit = document.createElement('div');
  orbit.classList.add('orbit');
  orbit.style.width = `${random(120, 220)}px`; // ukuran lebih kecil untuk HP
  orbit.style.height = orbit.style.width;
  orbit.style.setProperty('--orbit-final-left', `${random(10, 60)}%`); // final pos lebih ke tengah

  // Random top untuk HP? Atau fix center? Biasanya HP bagus di center
  // orbit.style.top = '50%'; // Sudah di CSS

  const path = document.createElement('span');
  path.classList.add('orbit-path');

  const icon = document.createElement('i');
  icon.className = iconClass;
  icon.style.animation = 'iconSpin 30s linear infinite'; // spin lambat

  orbit.appendChild(path);
  orbit.appendChild(icon);

  return orbit;
}
