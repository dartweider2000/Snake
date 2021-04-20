import ModeObject from '../../AbstractClasses/ModeObject'
import ResultWorld from './ResultWorld'
import ResultView from './ResultView'
import Game from '../../Game'

export default class Result extends ModeObject{
	constructor(game : Game){
		super(game);

		this.data = new ResultWorld(this);
		this.view = new ResultView();
	}
}