import PlayObject from '../AbstractClasses/PlayObject'

export default interface IUpdateBehavior{
	update(info : object, self : PlayObject) : void
}