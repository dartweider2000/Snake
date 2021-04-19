import IRenderBehavior from '../../Interfaces/IRenderBehavior'
import Grass from '../Grass'

export default class GrassRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D, self : Grass) : void{
		cx.fillStyle = "#242424";
		cx.fillRect(self.Left, self.Top, self.Size, self.Size);
	}
}