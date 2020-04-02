import player from './player';

('use strict');

const isLeftArrow = (keyCode) => keyCode === 37;
const isRightArrow = (keyCode) => keyCode === 39;

const events = () => {
  document.addEventListener('keyup', (e) => {
    const { keyCode } = e;

    if (isLeftArrow(keyCode)) {
      player.position.x--;
    }

    if (isRightArrow(keyCode)) {
      player.position.x++;
    }
  });
};

export default events;
