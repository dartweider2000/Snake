import IUpdateBehavior from '../../Interfaces/IUpdateBehavior'
import Snake from '../Snake'
import {Vector} from '../../consts'

export default class SnakeUpdate implements IUpdateBehavior{
	public update({data, activeKeys}, self : Snake) : void{
		let vector : Vector = self.vectorNow(activeKeys);

		//if(vector !== self.Vector)
			//self.changeVector(vector);


	}
}