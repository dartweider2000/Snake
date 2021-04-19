import PlayObject from '../AbstractClasses/PlayObject'
import SnakeRender from './RenderBehaviorClasses/SnakeRender'
import Tail from './Tail'
import Head from './Head'
import {Vector, Ver, Gor} from '../consts'
import SnakeUpdate from './UpdateBehaviorClasses/SnakeUpdate'

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
		this.updateBehavior = new SnakeUpdate();
	}

	public getArea() : {Left : number, Top : number}[]{
		return [this.Head ,...this.Tail].reduce<any>((result, obj) => {
			result.push({"Left" : obj.Left, "Top" : obj.Top});
			return result;
		}, []); 
	}

	private getCoord(vectors : Vector[], mark : (Head | Tail)) : {Left : number, Top : number}{
		let newVector = vectors[vectors.indexOf(this.Vector) ^ 1];

		if(newVector == Vector.Up){
			//return {Left : 3, Top : 3};
		}else if (newVector == Vector.Down){

		}else if (newVector == Vector.Right){

		}else if (newVector == Vector.Left){

		}

		return {Left : 3, Top : 3};
	}

	private add() : void{
		let 
			mark : (Head | Tail),
			coord : {Left : number, Top : number};

		if(!this.Tail.length)
			mark = this.Head;
		else
			mark = this.Tail[this.Tail.length - 1];

		if(Ver.includes(this.Vector))
			coord = this.getCoord(Ver, mark);
		else
			coord = this.getCoord(Gor, mark);
	}

	public get Tail() : Tail[]{
		return this.tail;
	}

	public get Head() : Head{
		return this.head;
	}

	public get Alive() : boolean{
		return this.alive;
	}

	public get Vector() : Vector{
		return this.vector;
	}
}