'use strict';

const createRow = (width) => new Array(width).fill(0);

export const createMatrix = (width, height) => {
  const matrix = [];

  for (let i = 0; i < height; i++) {
    matrix.push(createRow([width]));
  }

  return matrix;
};
