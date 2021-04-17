//import Snake from '../../PlayObjects/Snake'
//import Level from '../../PlayObjects/Level'
import IDataBehavior from '../../Interfaces/IDataBehavior'

export default class PlayWorld implements IDataBehavior{
	private snake; //: Snake;
	private level; //: Level;
	private score : number;

	constructor(){

	}

	public update(activeKeys) : void{

	}

	public get Score() : number{
		return this.score;
	} 

	public set Score(score : number){
		this.score = score;
	}
}