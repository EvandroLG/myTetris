import updateWrapper from './update';
import events from './events';

('use strict');

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.scale(15, 15);

const update = updateWrapper(ctx, canvas);

update();
events();
