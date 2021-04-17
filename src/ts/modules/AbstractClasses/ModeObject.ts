import IDataBehavior from '../Interfaces/IDataBehavior'
import IViewBehavior from '../Interfaces/IViewBehavior'

export default abstract class ModeObject{
	protected data : IDataBehavior;
	protected view : IViewBehavior;

	public get Data() : IDataBehavior{
		return this.data;
	}

	public get View() : IViewBehavior{
		return this.view;
	}
} 