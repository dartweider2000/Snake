import IRenderBehavior from '../../Interfaces/IRenderBehavior'
import Grass from '../Grass'

export default class GrassRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D, self : Grass) : void{
		cx.fillStyle = "#242424";
		cx.fillRect(self.Left, self.Top, self.Size, self.Size);
		//this.gridDraw(cx, self);
	}

	private gridDraw(cx : CanvasRenderingContext2D, self : Grass) : void{
		cx.beginPath();
		cx.strokeStyle = 'green';
		cx.moveTo(self.Left, self.Top);
		cx.lineTo(self.Right, self.Top);
		cx.lineTo(self.Right, self.Bottom);
		cx.lineTo(self.Left, self.Bottom);
		cx.lineTo(self.Left, self.Top);
		cx.stroke();
	}
}