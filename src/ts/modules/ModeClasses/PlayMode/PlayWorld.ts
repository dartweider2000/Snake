import Snake from '../../PlayObjects/Snake'
import Level from '../../PlayObjects/Level'
import IDataBehavior from '../../Interfaces/IDataBehavior'

export default class PlayWorld implements IDataBehavior{
	private snake; //: Snake;
	private level : Level;
	private score : number;

	constructor(){
		this.level = new Level();
	}

	public update(activeKeys) : void{

	}

	public get Score() : number{
		return this.score;
	} 

	public set Score(score : number){
		this.score = score;
	}

	public get Level() : Level{
		return this.level;
	}

	// public get Snake() : Snake{
	// 	return this.snake;
	// }
}