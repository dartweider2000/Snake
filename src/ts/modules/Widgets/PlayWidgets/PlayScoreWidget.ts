import IWidgetBehavior from '../../Interfaces/IWidgetBehavior'
import {BLOCK_SIZE} from '../../consts'
import WidgetObject from '../../AbstractClasses/WidgetObject'

export default class PlayScoreWidget extends WidgetObject implements IWidgetBehavior{
	constructor(canv : HTMLCanvasElement){
		super();

		this.x = canv.width - BLOCK_SIZE * 2;
		this.y = BLOCK_SIZE / 2;
		this.fontSize = BLOCK_SIZE / 2;
		this.color = "white";
	}

	public render(cx : CanvasRenderingContext2D, info : number) : void{
		cx.fillStyle = `${this.Color}`;
		cx.font = `${this.FontSize}px mono`;
		cx.fillText("Score: ", this.Left, this.Top);
		cx.fillText(`${info}`, this.Left + this.FontSize * 2 * 1.4, this.Top);
	}
}