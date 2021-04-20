import PlayObject from '../AbstractClasses/PlayObject'
import SnakeRender from './RenderBehaviorClasses/SnakeRender'
import Tail from './Tail'
import Head from './Head'
import {Vector, Ver, Gor, LevelSize} from '../consts'
import SnakeUpdate from './UpdateBehaviorClasses/SnakeUpdate'

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

		this.renderBehavior = new SnakeRender();
		this.updateBehavior = new SnakeUpdate();
	}

	public skan() : void{

	}

	public async wait() : Promise<any>{
		return new Promise((resolve, reject) => {
			this.DoMove = false;

			const timer = setTimeout(() => {
				this.DoMove = true;
				resolve(null);
			}, 50);
		});
	}

	public move(activeKeys : Set<string>) : void{
		this.blocksJump(this.getCoord(this.vectorNow(activeKeys), this.Head));
	}

	private blocksJump(coord : {IndexX : number, IndexY : number}) : void{		
		[this.Head, ...this.Tail].reduce<any>(
			(storage : {saveCoord : {IndexX : number, IndexY : number}, giveGoord : {IndexX : number, IndexY : number}}, 
				obj : (Head | Tail)
				) => {
					storage.saveCoord.IndexX = obj.IndexX;
					storage.saveCoord.IndexY = obj.IndexY;

					obj.IndexX = storage.giveGoord.IndexX;
					obj.IndexY = storage.giveGoord.IndexY;

					storage.giveGoord.IndexX = storage.saveCoord.IndexX;
					storage.giveGoord.IndexY = storage.saveCoord.IndexY;
				}
		, {saveCoord : {IndexX : null, IndexY : null}, giveGoord : {IndexX : coord.IndexX, IndexY : coord.IndexY}});
	}

	private changeVector(newVector : Vector) : void{
		this.Vector = newVector;
	}

	private vectorNow(activeKeys : Set<string>) : Vector{
		return this.correctingVector(this.findOutVector(this.chooseMoveKey(activeKeys)));
	}

	private chooseMoveKey(activeKeys : Set<string>) : string{
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

	public add() : void{
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