import updateWrapper from './update';
import { createMatrix } from './matrix';
import events from './events';

('use strict');

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.scale(15, 15);

const arena = createMatrix(12, 20);
const update = updateWrapper(ctx, arena, canvas);

update();
events();
