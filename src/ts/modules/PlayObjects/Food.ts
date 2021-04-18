import PlayObject from '../AbstractClasses/PlayObject'
import FoodRender from './RenderBehaviorClasses/FoodRender'

export default class Food extends PlayObject{
	constructor(x : number, y : number){
		super(x, y);

		this.renderBehavior = new FoodRender();
		this.renderBehavior.render = this.renderBehavior.render.bind(this);
	}
}