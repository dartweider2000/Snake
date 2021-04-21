import WidgetObject from '../../AbstractClasses/WidgetObject'
import IWidgetBehavior from '../../Interfaces/IWidgetBehavior'
import {BLOCK_SIZE} from '../../consts'

export default class ResultMessageWidget extends WidgetObject implements IWidgetBehavior{
	constructor(canv : HTMLCanvasElement){
		super();

		this.x = canv.width / 2 - canv.width / 7;
		this.y = canv.height / 2 - canv.width / 10;

		this.color = '#E9ECF1';
		this.fontSize = BLOCK_SIZE * 1.5;
	}

	public render(cx : CanvasRenderingContext2D) : void{
		cx.fillStyle = this.Color;
		cx.font = `${this.FontSize}px mono`;
		cx.fillText("Game Over", this.Left, this.Top);
	}
}