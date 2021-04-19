import IUpdateBehavior from '../../Interfaces/IUpdateBehavior'
import PlayObject from '../../AbstractClasses/PlayObject'

export default class NullUpdate implements IUpdateBehavior{
	public update({}, self : PlayObject) : void{

	}
}