import IRenderBehavior from '../../Interfaces/IRenderBehavior'

export default class TailRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D) : void{
		cx.fillStyle = "green";
		cx.fillRect(this.Left, this.Top, this.Size, this.Size);
	}
}