import IRenderBehavior from '../../Interfaces/IRenderBehavior'
import Level from '../Level'

export default class LevelRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D, self : Level) : void{
		self.Map.forEach(row => row.forEach(grass => grass.render(cx)));
		self.Food.render(cx);
	}
}