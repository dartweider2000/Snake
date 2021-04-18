import IRenderBehavior from '../../Interfaces/IRenderBehavior'

export default class HeadRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D) : void{
		cx.fillStyle = "red";
		cx.fillRect(this.Left, this.Top, this.Size, this.Size);
	}
}