import IDataBehavior from './IDataBehavior'

export default interface IViewBehavior{
	render(data : IDataBehavior) : void
}