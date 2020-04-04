import drawMatrix from './drawMatrix';
import { bg } from './color';
import player from './player';

('use strict');

const updateWrapper = (ctx, { width, height }) => {
  const draw = () => {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);
    drawMatrix(ctx, player);
  };

  let last = 0;
  const update = (time = 0) => {
    const delta = time - last;

    if (!last || delta >= 1000) {
      last = time;
      player.position.y++;
    }

    draw();
    requestAnimationFrame(update);
  };

  return update;
};

export default updateWrapper;
