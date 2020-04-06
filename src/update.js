import drawMatrix from './drawMatrix';
import { bg } from './color';
import player from './player';
import { isCollision, mergePlayer } from './arena';

('use strict');

const updateWrapper = (ctx, arena, { width, height }) => {
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

      if (isCollision(arena, player)) {
        player.position.y--;
        mergePlayer(arena, player);
        player.position.y = 0;
      }
    }

    draw();
    requestAnimationFrame(update);
  };

  return update;
};

export default updateWrapper;
