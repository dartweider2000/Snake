import IRenderBehavior from '../../Interfaces/IRenderBehavior'

export default class SnakeRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D) : void{
		this.head.render(cx);
		this.tail.forEach(tail => tail.render(cx));
	}
}