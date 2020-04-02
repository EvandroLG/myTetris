import updateWrapper from './update';
import events from './events';

('use strict');

const doc = document;
const canvas = doc.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.scale(15, 15);

const update = updateWrapper(ctx, canvas);

update();
events();
