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

	public isEaten() : boolean{
		return this.Food.Eaten;
	}

	private include(array : {IndexX : number, IndexY : number}[], obj : {IndexX : number, IndexY : number}) : boolean{
		return array.reduce((result, value : {IndexX : number, IndexY : number}) => {
			if(result)
				return result;

			if(obj.IndexX == value.IndexX && obj.IndexY == value.IndexY)
				return true;

			return false;
		}, false);
	}

	public generateFood(snake : Snake) : void{
		let 
			x : number = 0,
			y : number = 0,
			obj : {IndexX : number, IndexY : number};

		do{
			x = Math.floor(Math.random() * this.width);
			y = Math.floor(Math.random() * this.height);

			obj = {"IndexX" : x, "IndexY" : y};
		}while(this.include(snake.getArea(), obj));

		this.food = new Food(obj.IndexX, obj.IndexY);
	}

	public get Map() : Grass[][]{
		return this.map;
	}

	public get Food() : Food{
		return this.food;
	}
}