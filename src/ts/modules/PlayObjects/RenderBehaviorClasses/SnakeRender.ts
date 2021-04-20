import IRenderBehavior from '../../Interfaces/IRenderBehavior'
import Snake from '../Snake'

export default class SnakeRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D, self : Snake) : void{
		self.Tail.forEach(tail => tail.render(cx));
		self.Head.render(cx);
	}
}