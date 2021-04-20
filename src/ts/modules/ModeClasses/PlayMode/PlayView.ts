import ViewObject from '../../AbstractClasses/ViewObject'
import IViewBehavior from '../../Interfaces/IViewBehavior'
import PlayWorld from './PlayWorld'

export default class PlayView extends ViewObject implements IViewBehavior{
	constructor(){
		super();
	}

	public render(data : PlayWorld) : void{
		if(data.isAlive()){
			data.Level.render(this.cx);
			data.Snake.render(this.cx);
		}
	}
}