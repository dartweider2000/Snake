import ViewObject from '../../AbstractClasses/ViewObject'
import IViewBehavior from '../../Interfaces/IViewBehavior'
import ResultWorld from './ResultWorld'
import ResultBackgroundWidget from '../../Widgets/ResultWidgets/ResultBackgroundWidget'
import ResultWindowWidget from '../../Widgets/ResultWidgets/ResultWindowWidget'
import ResultMessageWidget from '../../Widgets/ResultWidgets/ResultMessageWidget'
import ResultScoreWidget from '../../Widgets/ResultWidgets/ResultScoreWidget'

export default class ResultView extends ViewObject implements IViewBehavior{
	private resultBackgroundWidget : ResultBackgroundWidget;
	private resultWindowWidget : ResultWindowWidget;
	private resultMessageWidget : ResultMessageWidget;
	private resultScoreWidget : ResultScoreWidget; 

	constructor(){
		super();

		this.resultBackgroundWidget = new ResultBackgroundWidget(this.Canv);
		this.resultWindowWidget = new ResultWindowWidget(this.Canv);
		this.resultMessageWidget = new ResultMessageWidget(this.Canv);
		this.resultScoreWidget = new ResultScoreWidget(this.Canv);
	}

	public render(data : ResultWorld) : void {
		this.BackgroundWidget.render(this.CX);
		this.WindowWidget.render(this.CX);
		this.MessageWidget.render(this.CX);
		this.ScoreWidget.render(this.CX, data.Score);
	}

	public get BackgroundWidget() : ResultBackgroundWidget{
		return this.resultBackgroundWidget;
	}

	public get WindowWidget() : ResultWindowWidget{
		return this.resultWindowWidget;
	}

	public get MessageWidget() : ResultMessageWidget{
		return this.resultMessageWidget;
	}

	public get ScoreWidget() : ResultScoreWidget{
		return this.resultScoreWidget;
	}
}