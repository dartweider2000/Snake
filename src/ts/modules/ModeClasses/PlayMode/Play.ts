import ModeObject from '../../AbstractClasses/ModeObject'
import PlayWorld from './PlayWorld'
import PlayView from './PlayView'
import Game from '../../Game'
import Result from '../ResultMode/Result'

export default class Play extends ModeObject{
	constructor(game : Game){
		super(game);

		this.data = new PlayWorld(this);
		this.view = new PlayView();
	}

	public giveResult() : void{
		this.Game.Mode = new Result(this.Game);
	}
}