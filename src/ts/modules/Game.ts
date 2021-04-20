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
			this.activeKeys.add(code);
			console.log(this.activeKeys);
		});

		document.addEventListener("keyup", ({code}) => {
			this.activeKeys.delete(code);
			console.log(this.activeKeys);
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