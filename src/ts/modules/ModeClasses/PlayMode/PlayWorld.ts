import Snake from '../../PlayObjects/Snake'
import Level from '../../PlayObjects/Level'
import IDataBehavior from '../../Interfaces/IDataBehavior'
import {LevelSize} from '../../consts'
import Tail from '../../PlayObjects/Tail'
import Food from '../../PlayObjects/Food'

export default class PlayWorld implements IDataBehavior{
	private snake : Snake;
	private level : Level;
	private score : number;

	constructor(){
		this.snake = new Snake((LevelSize.Width - 1) / 2, (LevelSize.Height - 1) / 2);
		this.level = new Level(this.Snake);
	}

	public update(activeKeys) : void{
		this.Snake.update({"data" : this, "activeKeys" : activeKeys});
		this.Level.update({"data" : this});
	}

	public objectOnPath() : (Tail | Food){
		for(let obj of [this.Level.Food, ...this.Snake.Tail]){
			if(obj.IndexX === this.Snake.Head.IndexX && obj.IndexY === this.Snake.Head.IndexY)
				return obj;
		}

		return null;
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

	public get Snake() : Snake{
		return this.snake;
	}
}