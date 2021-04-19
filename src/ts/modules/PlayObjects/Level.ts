import LevelRender from './RenderBehaviorClasses/LevelRender'
import PlayObject from '../AbstractClasses/PlayObject'
import Grass from './Grass'
import Food from './Food'
import {LevelSize, BLOCK_SIZE} from '../consts'
import Snake from '../PlayObjects/Snake'
import LevelUpdate from './UpdateBehaviorClasses/LevelUpdate'

export default class Level extends PlayObject{
	private map : Grass[][];
	private food : Food;
	private width : number;
	private height : number;

	constructor(snake : Snake){
		super();

		this.width = LevelSize.Width;
		this.height = LevelSize.Height;

		this.map = [];

		this.renderBehavior = new LevelRender();
		this.updateBehavior = new LevelUpdate();

		for(let j = 0; j < this.height; j++){
			this.map[j] = [];
			for(let i = 0; i < this.width; i++){
				this.map[j][i] = new Grass(i, j);
			}
		}

		this.generateFood(snake);
	}

	private include(array : {Left : number, Top : number}[], obj : {Left : number, Top : number}) : boolean{
		return array.reduce((result, value : {Left : number, Top : number}) => {
			if(result)
				return result;

			if(obj.Left == value.Left && obj.Top == value.Top)
				return true;

			return false;
		}, false);
	}

	private generateFood(snake : Snake) : void{
		let 
			x : number = 0,
			y : number = 0,
			obj : {Left : number, Top : number};

		do{
			x = Math.floor(Math.random() * this.width) *  BLOCK_SIZE;
			y = Math.floor(Math.random() * this.height) *  BLOCK_SIZE;

			obj = {"Left" : x, "Top" : y};
		}while(this.include(snake.getArea(), obj));

		this.food = new Food(obj.Left / BLOCK_SIZE, obj.Top / BLOCK_SIZE);
	}

	public get Map() : Grass[][]{
		return this.map;
	}

	public get Food() : Food{
		return this.food;
	}
}