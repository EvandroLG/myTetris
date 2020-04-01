import drawMatrix from './drawMatrix';

'use strict';

const doc = document;
const canvas = doc.getElementById('game');
const context = canvas.getContext('2d');
context.scale(20, 20);

context.fillStyle = '#000';
context.fillRect(0, 0, canvas.width, canvas.height);

const matrix = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0]
];

drawMatrix(matrix, context);
