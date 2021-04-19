import IRenderBehavior from '../../Interfaces/IRenderBehavior'
import Snake from '../Snake'

export default class SnakeRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D, self : Snake) : void{
		self.Head.render(cx);
		self.Tail.forEach(tail => tail.render(cx));
	}
}