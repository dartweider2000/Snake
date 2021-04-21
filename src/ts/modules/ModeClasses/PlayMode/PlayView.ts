import ViewObject from '../../AbstractClasses/ViewObject'
import IViewBehavior from '../../Interfaces/IViewBehavior'
import PlayWorld from './PlayWorld'
import PlayScoreWidget from '../../Widgets/PlayWidgets/PlayScoreWidget'

export default class PlayView extends ViewObject implements IViewBehavior{
	private playScoreWidget : PlayScoreWidget;

	constructor(){
		super();

		this.playScoreWidget = new PlayScoreWidget(this.Canv);
	}

	public render(data : PlayWorld) : void{
		if(!data.isAlive())
			return;

		data.Level.render(this.CX);
		data.Snake.render(this.CX);
		this.ScoreWidget.render(this.CX, data.Score);
	}

	public get ScoreWidget() : PlayScoreWidget{
		return this.playScoreWidget;
	}
}