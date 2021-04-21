import WidgetObject from '../../AbstractClasses/WidgetObject'
import IWidgetBehavior from '../../Interfaces/IWidgetBehavior'

export default class ResultWindowWidget extends WidgetObject implements IWidgetBehavior{
	constructor(canv : HTMLCanvasElement){
		super();

		this.width = canv.width / 2;
		this.height = canv.height / 2;

		this.x = canv.width / 4;
		this.y = canv.height / 4;

		this.fill = '#2B303B';
		this.stroke = '#903F3D';

		this.lineWidth = 5;
	}

	public render(cx : CanvasRenderingContext2D) : void{
		cx.fillStyle = this.Fill;
		cx.strokeStyle = this.Stroke;
		cx.lineWidth = this.LineWidth;
		cx.fillRect(this.Left, this.Top, this.Width, this.Height);
		cx.strokeRect(this.Left, this.Top, this.Width, this.Height);
	}
}