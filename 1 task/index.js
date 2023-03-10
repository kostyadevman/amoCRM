const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let intervalId;

const format = (t) => {
  return t < 10 ? '0' + t : t;
};

const renderTimer = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor(seconds / 60) % 60;
  const s = seconds % 60;
  timerEl.innerHTML = `${format(h)}:${format(m)}:${format(s)}`;
}

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    intervalId = setInterval(() => {
      if (seconds >= 0) {
        renderTimer(seconds);
        seconds--;
      }
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  clearInterval(intervalId);
  animateTimer(seconds);
  inputEl.value = '';
});
