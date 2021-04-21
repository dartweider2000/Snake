import IDataBehavior from '../../Interfaces/IDataBehavior'
import Result from './Result'

export default class ResultWorld implements IDataBehavior{
	private result : Result;
	private score : number;

	constructor(result : Result, score : number){
		this.result = result;
		this.score = score;
	}

	public update(activeKeys : Set<string>) : void{
		
	}

	public get Result() : Result{
		return this.result;
	}

	public get Score() : number{
		return this.score;
	}
}