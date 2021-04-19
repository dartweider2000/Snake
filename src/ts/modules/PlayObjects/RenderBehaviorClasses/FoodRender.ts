import IRenderBehavior from '../../Interfaces/IRenderBehavior'
import Food from '../Food'

export default class FoodRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D, self : Food) : void{
		cx.fillStyle = 'orange';
		cx.fillRect(self.Left, self.Top, self.Size, self.Size);
	}
}