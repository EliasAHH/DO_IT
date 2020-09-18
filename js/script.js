let card = findsById('card');
let openB = findsById('open');
let closeB = findsById('close');
let timer = null;

openB.addEventListener('click', openCard);
closeB.addEventListener('click', closeCard);

function findsById(id) {
  return document.getElementById(id);
}

function openCard() {
  autoplaySong();
  card.setAttribute('class', 'open-half');
  if (timer) clearTimeout(timer);
  timer = setTimeout(function () {
    card.setAttribute('class', 'open-fully');
    timer = null;
  }, 1000);
}

function autoplaySong() {
  let body = document.querySelector('body');
  let audio = document.createElement('audio');
  audio.innerHTML = '<source src="../public/petapan.mp3" type="audio/mp3" />';
  body.append(audio);
  audio.autoplay = true;
}

function closeCard() {
  card.setAttribute('class', 'close-half');
  if (timer) clearTimerout(timer);
  timer = setTimeout(function () {
    card.setAttribute('class', '');
    timer = null;
  }, 1000);
}
