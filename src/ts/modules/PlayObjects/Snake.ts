import PlayObject from '../AbstractClasses/PlayObject'
import SnakeRender from './RenderBehaviorClasses/SnakeRender'
import Tail from './Tail'
import Head from './Head'
import {Vector, Ver, Gor, LevelSize} from '../consts'
import SnakeUpdate from './UpdateBehaviorClasses/SnakeUpdate'
import Food from './Food'

export default class Snake extends PlayObject{
	private tail : Tail[];
	private head : Head;
	private alive : boolean;
	private doMove : boolean;

	constructor(x : number, y : number){
		super(x, y);

		this.tail = [];
		this.head = new Head(x, y, Vector.Left);

		this.alive = true;
		this.doMove = true;

		this.renderBehavior = new SnakeRender();
		this.updateBehavior = new SnakeUpdate();
	}

	public clearActiveKeys(activeKeys : Set<string>) : void{
		activeKeys.clear();
	}

	private foodReaction(obj : Food) : void{
		obj.Eaten = true;
		this.add();
	}

	private tailReaction(obj : Tail) : never{
		throw new Error();
	}

	public reaction(obj : (Tail | Food)) : void{
		if(obj instanceof Food)
			this.foodReaction(obj);
		else if(obj instanceof Tail)
			this.tailReaction(obj);
	}

	public wait() : Promise<any>{
		return new Promise((resolve, reject) => {
			this.DoMove = false;

			const timer = setTimeout(() => {
				this.DoMove = true;
				resolve(null);
			}, 65);
		});
	}

	public move(activeKeys : Set<string>) : void{
		let newVector : Vector = this.vectorNow(activeKeys);
		this.blocksJump(this.getCoord(newVector, this.Head), newVector);
	}

	private blocksJump(coord : {IndexX : number, IndexY : number}, newVector : Vector) : void{		
		[this.Head, ...this.Tail].reduce<any>(
			(storage : {saveCoord : {IndexX : number, IndexY : number, Vector : Vector}, giveGoord : {IndexX : number, IndexY : number, Vector : Vector}}, 
				obj : (Head | Tail)
				) => {				
					storage.saveCoord.IndexX = obj.IndexX;
					storage.saveCoord.IndexY = obj.IndexY;
					storage.saveCoord.Vector = obj.Vector;

					obj.IndexX = storage.giveGoord.IndexX;
					obj.IndexY = storage.giveGoord.IndexY;
					obj.Vector = storage.giveGoord.Vector;

					storage.giveGoord.IndexX = storage.saveCoord.IndexX;
					storage.giveGoord.IndexY = storage.saveCoord.IndexY;
					storage.giveGoord.Vector = storage.saveCoord.Vector;

					return storage;
				}
		, {saveCoord : {IndexX : null, IndexY : null, Vector : null}, giveGoord : {IndexX : coord.IndexX, IndexY : coord.IndexY, Vector : newVector}});
	}

	private changeVector(newVector : Vector) : void{
		this.Vector = newVector;
	}

	public vectorNow(activeKeys : Set<string>) : Vector{
		return this.correctingVector(this.findOutVector(this.chooseMoveKey(activeKeys)));
	}

	public chooseMoveKey(activeKeys : Set<string>) : string{
		let key : string = '';

		activeKeys.forEach(value => {
			if(/^Arrow/.test(value))
				key = value;
		});

		return key;
	}

	private findOutVector(key : string) : Vector{
		if(key === 'ArrowUp')
			return Vector.Up;
		else if(key === 'ArrowDown')
			return Vector.Down;
		else if(key === 'ArrowRight')
			return Vector.Right;
		else if(key === 'ArrowLeft')
			return Vector.Left;
		else
			return this.Vector;
	}

	private correctingVector(newVector : Vector) : Vector{
		if(Ver.includes(this.Vector) && Ver.includes(newVector) || Gor.includes(this.Vector) && Gor.includes(newVector))
			return this.Vector;
		else
			return newVector;
	} 

	public getArea() : {IndexX : number, IndexY : number}[]{
		return [this.Head, ...this.Tail].reduce<any>((result, obj) => {
			result.push({"IndexX" : obj.IndexX, "IndexY" : obj.IndexY});
			return result;
		}, []); 
	}

	private checkCoord(IndexX : number, IndexY : number) : {IndexX : number, IndexY : number}{
		if(IndexX >= LevelSize.Width)
			IndexX = 0;
		else if(IndexX < 0)
			IndexX = LevelSize.Width - 1;

		if(IndexY >= LevelSize.Height)
			IndexY = 0;
		else if(IndexY < 0)
			IndexY = LevelSize.Height - 1;

		return {IndexX : IndexX, IndexY : IndexY};
	}

	private getCoord(newVector : Vector, mark : (Head | Tail)) : {IndexX : number, IndexY : number}{
		if(newVector == Vector.Up)
			return this.checkCoord(mark.IndexX, mark.IndexY - 1);
		else if (newVector == Vector.Down)
			return this.checkCoord(mark.IndexX, mark.IndexY + 1);
		else if (newVector == Vector.Right)
			return this.checkCoord(mark.IndexX + 1, mark.IndexY);
		else if (newVector == Vector.Left)
			return this.checkCoord(mark.IndexX - 1, mark.IndexY);	
	}

	private add() : void{
		let 
			mark : (Head | Tail),
			coord : {IndexX : number, IndexY : number};

		if(!this.Tail.length)
			mark = this.Head;
		else
			mark = this.Tail[this.Tail.length - 1];

		if(Ver.includes(mark.Vector))
			coord = this.getCoord(Ver[Ver.indexOf(mark.Vector) ^ 1], mark);
		else
			coord = this.getCoord(Gor[Gor.indexOf(mark.Vector) ^ 1], mark);

		this.Tail.push(new Tail(coord.IndexX, coord.IndexY, mark.Vector));
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
		return this.Head.Vector;
	}

	public set Vector(vector : Vector){
		this.Head.Vector = vector;
	}

	public get DoMove() : boolean{
		return this.doMove;
	}

	public set DoMove(doMove : boolean){
		this.doMove = doMove;
	}
}