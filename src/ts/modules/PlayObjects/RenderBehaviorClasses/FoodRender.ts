import IRenderBehavior from '../../Interfaces/IRenderBehavior'

export default class FoodRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D) : void{
		cx.fillStyle = 'orange';
		cx.fillRect(this.Left, this.Top, this.Size, this.Size);
	}
}