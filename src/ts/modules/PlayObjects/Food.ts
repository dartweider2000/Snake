import PlayObject from '../AbstractClasses/PlayObject'
import FoodRender from './RenderBehaviorClasses/FoodRender'

export default class Food extends PlayObject{
	private score : number;
	private eaten : boolean;

	constructor(x : number, y : number){
		super(x, y);

		this.score = 10;
		this.eaten = false;

		this.renderBehavior = new FoodRender();
		this.renderBehavior.render = this.renderBehavior.render.bind(this);
	}

	public get Score() : number{
		return this.score;
	}

	public get Eaten() : boolean{
		return this.eaten;
	}
}