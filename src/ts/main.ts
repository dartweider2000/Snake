import Game from './modules/Game'

const 
	canv = document.querySelector('.canvas') as HTMLCanvasElement,
	cx = canv.getContext('2d'),
	box = document.querySelector('.box') as HTMLElement;

canv.width = box.offsetWidth;
canv.height = box.offsetHeight;

const game : Game = new Game();

console.log(game);