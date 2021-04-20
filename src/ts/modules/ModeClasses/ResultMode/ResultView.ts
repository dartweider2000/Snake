import ViewObject from '../../AbstractClasses/ViewObject'
import IViewBehavior from '../../Interfaces/IViewBehavior'
import ResultWorld from './ResultWorld'

export default class ResultView extends ViewObject implements IViewBehavior{
	constructor(){
		super();
	}

	public render(data : ResultWorld) : void {
		//console.log("ResultView");
	}
}