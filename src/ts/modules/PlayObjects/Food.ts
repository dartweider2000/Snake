import PlayObject from '../AbstractClasses/PlayObject'
import FoodRender from './RenderBehaviorClasses/FoodRender'
import NullUpdate from './UpdateBehaviorClasses/NullUpdate'

export default class Food extends PlayObject{
	private score : number;
	private eaten : boolean;

	constructor(x : number, y : number){
		super(x, y);

		this.score = 1;
		this.eaten = false;

		this.renderBehavior = new FoodRender();
		this.updateBehavior = new NullUpdate();
	}

	public get Score() : number{
		return this.score;
	}

	public get Eaten() : boolean{
		return this.eaten;
	}

	public set Eaten(eaten : boolean){
		this.eaten = eaten;
	}
}