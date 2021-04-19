import IRenderBehavior from '../../Interfaces/IRenderBehavior'
import Tail from '../Tail'

export default class TailRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D, self : Tail) : void{
		cx.fillStyle = "green";
		cx.fillRect(self.Left, self.Top, self.Size, self.Size);
	}
}