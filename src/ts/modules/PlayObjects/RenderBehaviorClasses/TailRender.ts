import IRenderBehavior from '../../Interfaces/IRenderBehavior'
import Tail from '../Tail'

export default class TailRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D, self : Tail) : void{
		cx.fillStyle = "green";
		cx.fillRect(self.Left + 2.5, self.Top + 2.5, self.Size - 5, self.Size - 5);
	}
}