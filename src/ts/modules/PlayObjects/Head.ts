import PlayObject from '../AbstractClasses/PlayObject'
import HeadRender from './RenderBehaviorClasses/HeadRender'
import NullUpdate from './UpdateBehaviorClasses/NullUpdate'

export default class Head extends PlayObject{
	constructor(x : number, y : number){
		super(x, y);

		this.renderBehavior = new HeadRender();
		this.renderBehavior.render = this.renderBehavior.render.bind(this);

		this.updateBehavior = new NullUpdate();
		this.updateBehavior.update = this.updateBehavior.update.bind(this)
	}
}