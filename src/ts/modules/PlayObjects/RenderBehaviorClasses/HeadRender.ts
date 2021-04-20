import IRenderBehavior from '../../Interfaces/IRenderBehavior'
import Head from '../Head'

export default class HeadRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D, self : Head) : void{
		cx.fillStyle = "red";
		cx.fillRect(self.Left + 2.5, self.Top + 2.5, self.Size - 5, self.Size - 5);
	}
}