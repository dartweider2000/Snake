import IRenderBehavior from '../../Interfaces/IRenderBehavior'
import Head from '../Head'

export default class HeadRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D, self : Head) : void{
		cx.fillStyle = "red";
		cx.fillRect(self.Left, self.Top, self.Size, self.Size);
	}
}