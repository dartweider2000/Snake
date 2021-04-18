import PlayObject from '../AbstractClasses/PlayObject'
import GrassRender from './RenderBehaviorClasses/GrassRender'

export default class Grass extends PlayObject{
	constructor(x : number, y : number){
		super(x, y);

		this.renderBehavior = new GrassRender();
		this.renderBehavior.render = this.renderBehavior.render.bind(this);
	}
}