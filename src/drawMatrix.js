'use strict';

const drawMatrix = (matrix, context) => (
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle = 'red';
        context.fillRect(x, y, 1, 1);
      }
    })
  })
);

export default drawMatrix;
