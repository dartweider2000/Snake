import PlayObject from '../AbstractClasses/PlayObject'
import HeadRender from './RenderBehaviorClasses/HeadRender'

export default class Head extends PlayObject{
	constructor(x : number, y : number){
		super(x, y);

		this.renderBehavior = new HeadRender();
		this.renderBehavior.render = this.renderBehavior.render.bind(this);
	}
}