import PlayObject from '../AbstractClasses/PlayObject'
import SnakeRender from './RenderBehaviorClasses/SnakeRender'
import Tail from './Tail'
import Head from './Head'
import {Vector} from '../consts'

export default class Snake extends PlayObject{
	private tail : Tail[];
	private head : Head;
	private vector : Vector;
	private alive : boolean;

	constructor(x : number, y : number){
		super(x, y);

		this.tail = [];
		this.head = new Head(x, y);

		this.vector = Vector.Left;
		this.alive = true;

		this.renderBehavior = new SnakeRender();
		this.renderBehavior.render = this.renderBehavior.render.bind(this);
	}

	public getArea() : object[]{
		return [this.head ,...this.tail].reduce<any>((result, obj) => {
			result.push({"Left" : obj.Left, "Top" : obj.Top});
			return result;
		}, []); 
	}

	public get Alive() : boolean{
		return this.alive;
	}

	public get Vector() : Vector{
		return this.vector;
	}
}