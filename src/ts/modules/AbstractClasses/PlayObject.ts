import IRenderBehavior from '../Interfaces/IRenderBehavior'
import IUpdateBehavior from '../Interfaces/IUpdateBehavior'
import {BLOCK_SIZE} from '../consts'

export default abstract class PlayObject{
	protected x : number;
	protected y : number;
	protected size : number;

	protected renderBehavior : IRenderBehavior;
	protected updateBehavior : IUpdateBehavior;

	constructor(x : number, y : number)
	constructor()

	constructor(x ?: any, y ?: any){
		if(x === undefined)
			return;

		this.size = BLOCK_SIZE;

		this.x = x * this.Size;
		this.y = y * this.Size;

	}

	public update(obj : object) : void{
		this.updateBehavior.update(obj, this);
	}

	public render(cx : CanvasRenderingContext2D) : void{
		this.renderBehavior.render(cx, this);
	}

	public set IndexX(indexX){
		this.Left = indexX * this.Size;
	}

	public set IndexY(indexY){
		this.Top = indexY * this.Size;
	}

	public get IndexX() : number{
		return this.Left / this.Size;
	}

	public get IndexY() : number{
		return this.Top / this.Size;
	}

	public get Left() : number{
		return this.x;
	}

	public get Top() : number{
		return this.y;
	}

	public set Left(x : number){
		this.x = x;
	}

	public set Top(y : number){
		this.y = y;
	}

	public get Right() : number{
		return this.Left + this.Size;
	}

	public get Bottom() : number{
		return this.Top + this.Size;
	}

	public get Size() : number{
		return this.size;
	}
}