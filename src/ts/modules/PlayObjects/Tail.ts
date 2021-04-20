import PlayObject from '../AbstractClasses/PlayObject'
import TailRender from './RenderBehaviorClasses/TailRender'
import NullUpdate from './UpdateBehaviorClasses/NullUpdate'
import {Vector} from '../consts'

export default class Tail extends PlayObject{
	private vector : Vector;

	constructor(x : number, y : number, vector : Vector){
		super(x, y);

		this.vector = vector;

		this.renderBehavior = new TailRender();
		this.updateBehavior = new NullUpdate();
	}

	public get Vector() : Vector{
		return this.vector;
	}

	public set Vector(vector : Vector){
		this.vector = vector;
	}
}