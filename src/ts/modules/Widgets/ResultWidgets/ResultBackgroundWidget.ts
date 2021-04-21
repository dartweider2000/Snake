import WidgetObject from '../../AbstractClasses/WidgetObject'
import IWidgetBehavior from '../../Interfaces/IWidgetBehavior'

export default class ResultBackgroundWidget extends WidgetObject implements IWidgetBehavior{
	constructor(canv : HTMLCanvasElement){
		super();

		this.width = canv.width;
		this.height = canv.height;

		this.x = 0;
		this.y = 0;

		this.fill = '#242424';
	}

	public render(cx : CanvasRenderingContext2D) : void{
		cx.fillStyle = this.Fill;
		cx.fillRect(this.Left, this.Top, this.Width, this.Height);
	}
}