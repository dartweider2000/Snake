import ModeObject from './AbstractClasses/ModeObject'
import Play from './ModeClasses/PlayMode/Play'

export default class Game{
	private mode : ModeObject;
	private activeKeys : Set<string>;

	constructor(){
		this.mode = new Play();
		this.activeKeys = new Set();

		this.loop = this.loop.bind(this);

		document.addEventListener("keydown", ({code}) => {
			console.log(code);
		});

		document.addEventListener("keyup", ({code}) => {
			console.log(code);
		});
	}

	private loop() : void{
		this.mode.Data.update(this.activeKeys);
		this.mode.View.render(this.mode.Data);

		requestAnimationFrame(this.loop);
	}

	public start() : void{
		this.loop();
	}

	public set Mode(mode : ModeObject){
		this.mode = mode;
	}
}