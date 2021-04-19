import PlayObject from '../AbstractClasses/PlayObject'
import TailRender from './RenderBehaviorClasses/HeadRender'
import NullUpdate from './UpdateBehaviorClasses/NullUpdate'

export default class Tail extends PlayObject{
	constructor(x : number, y : number){
		super(x, y);

		this.renderBehavior = new TailRender();
		this.renderBehavior.render = this.renderBehavior.render.bind(this);

		this.updateBehavior = new NullUpdate();
		this.updateBehavior.update = this.updateBehavior.update.bind(this)
	}
}