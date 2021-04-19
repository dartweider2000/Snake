export default interface IDataBehavior{
	update(activeKeys : Set<string>) : void;
}