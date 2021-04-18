import IRenderBehavior from '../../Interfaces/IRenderBehavior'

export default class LevelRender implements IRenderBehavior{
	public render(cx : CanvasRenderingContext2D) : void{
		this.map.forEach(row => row.forEach(grass => grass.render(cx)));
		this.food.render(cx);
	}
}