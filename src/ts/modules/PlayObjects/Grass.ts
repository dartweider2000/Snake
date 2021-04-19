import PlayObject from '../AbstractClasses/PlayObject'
import GrassRender from './RenderBehaviorClasses/GrassRender'
import NullUpdate from './UpdateBehaviorClasses/NullUpdate'

export default class Grass extends PlayObject{
	constructor(x : number, y : number){
		super(x, y);

		this.renderBehavior = new GrassRender();
		this.updateBehavior = new NullUpdate();
	}
}