import IUpdateBehavior from '../../Interfaces/IUpdateBehavior'
import Level from '../Level'
import PlayWorld from '../../ModeClasses/PlayMode/PlayWorld'

export default class LevelUpdate implements IUpdateBehavior{
	public update({data}, self : Level) : void{
		if(self.isEaten())
			self.generateFood((data as PlayWorld).Snake);
	}
}