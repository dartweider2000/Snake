import PlayObject from '../AbstractClasses/PlayObject'
import TailRender from './RenderBehaviorClasses/HeadRender'
import NullUpdate from './UpdateBehaviorClasses/NullUpdate'

export default class Tail extends PlayObject{
	constructor(x : number, y : number){
		super(x, y);

		this.renderBehavior = new TailRender();
		this.updateBehavior = new NullUpdate();
	}
}