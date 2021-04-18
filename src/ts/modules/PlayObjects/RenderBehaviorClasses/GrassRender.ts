import IRenderBehavior from '../../Interfaces/IRenderBehavior'

export default class GrassRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D) : void{
		cx.fillStyle = "#242424";
		cx.fillRect(this.Left, this.Top, this.Size, this.Size);
	}
}