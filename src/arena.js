'use strict';

export const mergePlayer = (arena, player) => {
  player.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        arena[y + player.position.y][x + player.position.x] = value;
      }
    });
  });
};
