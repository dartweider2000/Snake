import PlayObject from '../AbstractClasses/PlayObject'
import TailRender from './RenderBehaviorClasses/HeadRender'

export default class Tail extends PlayObject{
	constructor(x : number, y : number){
		super(x, y);

		this.renderBehavior = new TailRender();
		this.renderBehavior.render = this.renderBehavior.render.bind(this);
	}
}