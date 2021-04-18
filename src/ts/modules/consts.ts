export {BLOCK_SIZE, LevelSize}

const parent = document.querySelector('.box') as HTMLElement;

enum LevelSize{
	Height = 18,
	Width = 24
}
const BLOCK_SIZE = parent.offsetHeight / LevelSize.Height;