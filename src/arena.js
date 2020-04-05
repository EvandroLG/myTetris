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

export const isCollision = (arena, player) => {
  const { matrix, position } = player;

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const hasCollision =
        matrix[y][x] === 1 && arena[y + position.y]?.[x + position.x];

      if (hasCollision) {
        return true;
      }
    }
  }

  return false;
};
