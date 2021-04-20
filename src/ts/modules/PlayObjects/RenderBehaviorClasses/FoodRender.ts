import IRenderBehavior from '../../Interfaces/IRenderBehavior'
import Food from '../Food'

export default class FoodRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D, self : Food) : void{
		cx.fillStyle = 'orange';
		cx.fillRect(self.Left + 2.5, self.Top + 2.5, self.Size - 5, self.Size - 5);
	}
}