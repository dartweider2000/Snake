import ModeObject from '../../AbstractClasses/ModeObject'
import PlayWorld from './PlayWorld'
import PlayView from './PlayView'

export default class Play extends ModeObject{
	constructor(){
		super();

		this.data = new PlayWorld();
		this.view = new PlayView();
	}
}