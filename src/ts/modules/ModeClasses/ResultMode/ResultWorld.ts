import IDataBehavior from '../../Interfaces/IDataBehavior'
import Result from './Result'

export default class ResultWorld implements IDataBehavior{
	private result : Result;

	constructor(result : Result){
		this.result = result;
	}

	public update(activeKeys : Set<string>) : void{
		//console.log("ResultWorld");
	}
}