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
		this.renderBehavior.render = this.renderBehavior.render.bind(this);

		this.updateBehavior = new LevelUpdate();
		this.updateBehavior.update = this.updateBehavior.update.bind(this);

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
}