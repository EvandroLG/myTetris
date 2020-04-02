import { bg } from './color';
import drawMatrix from './drawMatrix';
import player from './player';

('use strict');

const doc = document;
const canvas = doc.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.scale(20, 20);

ctx.fillStyle = bg;
ctx.fillRect(0, 0, canvas.width, canvas.height);

const draw = () => drawMatrix(ctx, player);
const update = () => {
  draw();
  requestAnimationFrame(update);
};

update();
