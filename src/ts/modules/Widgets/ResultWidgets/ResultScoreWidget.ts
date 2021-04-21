import WidgetObject from '../../AbstractClasses/WidgetObject'
import IWidgetBehavior from '../../Interfaces/IWidgetBehavior'
import PlayScoreWidget from '../PlayWidgets/PlayScoreWidget'
import {BLOCK_SIZE} from '../../consts'

export default class ResultScoreWidget extends WidgetObject implements IWidgetBehavior{
	private scoreWidget : PlayScoreWidget;

	constructor(canv : HTMLCanvasElement){
		super();

		this.scoreWidget = new PlayScoreWidget(canv);
		this.ScoreWidget.render = this.ScoreWidget.render.bind(this);

		this.x = canv.width / 2 - BLOCK_SIZE * 1.7;
		this.y = canv.height /  2;
		this.fontSize = BLOCK_SIZE;
		this.color = "white";
	}

	public render(cx : CanvasRenderingContext2D, score : number) : void{
		this.ScoreWidget.render(cx, score);
	}

	public get ScoreWidget() : PlayScoreWidget{
		return this.scoreWidget;
	}
}