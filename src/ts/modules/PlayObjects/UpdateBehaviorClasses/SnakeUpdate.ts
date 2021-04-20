import IUpdateBehavior from '../../Interfaces/IUpdateBehavior'
import Snake from '../Snake'
import {Vector} from '../../consts'
import PlayWorld from '../../ModeClasses/PlayMode/PlayWorld'

export default class SnakeUpdate implements IUpdateBehavior{
	public update({data, activeKeys}, self : Snake) : void{
		if(!self.DoMove)
			return;

		self.move(activeKeys);
		self.reaction((data as PlayWorld).objectOnPath());

		self.wait();
	}
}