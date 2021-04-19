import PlayObject from '../AbstractClasses/PlayObject'
import HeadRender from './RenderBehaviorClasses/HeadRender'
import NullUpdate from './UpdateBehaviorClasses/NullUpdate'

export default class Head extends PlayObject{
	constructor(x : number, y : number){
		super(x, y);

		this.renderBehavior = new HeadRender();
		this.updateBehavior = new NullUpdate();
	}
}