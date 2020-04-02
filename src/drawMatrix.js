import { red } from './color';

('use strict');

const drawMatrix = (ctx, { matrix, position }) =>
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        ctx.fillStyle = red;
        ctx.fillRect(x, y + position.y, 1, 1);
      }
    });
  });

export default drawMatrix;
