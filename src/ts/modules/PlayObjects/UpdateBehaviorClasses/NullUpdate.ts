import IUpdateBehavior from '../../Interfaces/IUpdateBehavior'

export default class NullUpdate implements IUpdateBehavior{
	public update({}) : void{

	}
}