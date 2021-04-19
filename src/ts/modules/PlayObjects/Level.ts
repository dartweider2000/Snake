import LevelRender from './RenderBehaviorClasses/LevelRender'
import PlayObject from '../AbstractClasses/PlayObject'
import Grass from './Grass'
import Food from './Food'
import {LevelSize} from '../consts'
import Snake from '../PlayObjects/Snake'
import LevelUpdate from './UpdateBehaviorClasses/LevelUpdate'

export default class Level extends PlayObject{
	private map : Grass[][];
	private food : Food;
	private width : number;
	private height : number;

	constructor(){
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

		this.food = new Food(2, 2);
	}

	public generateFood(snake : Snake) : void{

	}

	public get Map() : Grass[][]{
		return this.map;
	}

	public get Food() : Food{
		return this.food;
	}
}