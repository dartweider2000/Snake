import PlayObject from '../AbstractClasses/PlayObject'
import IDataBehavior from './IDataBehavior'

export default interface IUpdateBehavior{
	update(info : {data ?: IDataBehavior, activeKeys ?: Set<string>}, self : PlayObject) : void
}