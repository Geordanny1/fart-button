const buttonEl   = document.getElementById('button');
const fartMenuEl = document.getElementById('fart_menu');

const defaultAudioEl = new Audio('./sounds/fart-fixed.mp3');
const sofaAudioEl    = new Audio('./sounds/sofa.wav');
const waggyAudioEl   = new Audio('./sounds/waggy.wav');
const ecoAudioEl     = new Audio('./sounds/eco_fart.wav');

const farts = {
  'Default' : defaultAudioEl,
  'Eco'     : ecoAudioEl,
  'Waggy'   : waggyAudioEl,
  'Sofa'    : sofaAudioEl
}

const playFart = fart => {
  fart.currentTime = 0;
  fart.play();
}

const getFart = () => {
  return fartMenuEl.value;
}

button.addEventListener('click', () => {
  const fart = farts[getFart()];
  playFart(fart);
})

