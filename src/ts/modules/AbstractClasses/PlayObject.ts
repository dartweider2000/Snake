import IRenderBehavior from '../Interfaces/IRenderBehavior'
import {BLOCK_SIZE} from '../consts'

export default abstract class PlayObject{
	protected x : number;
	protected y : number;
	protected size : number;

	protected renderBehavior : IRenderBehavior;

	constructor(x : number, y : number)
	constructor()

	constructor(x ?: any, y ?: any){
		if(x === undefined)
			return;

		this.size = BLOCK_SIZE;

		this.x = x * this.Size;
		this.y = y * this.Size;

	}

	public render(cx : CanvasRenderingContext2D) : void{
		this.renderBehavior.render(cx);
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