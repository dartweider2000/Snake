import IDataBehavior from '../Interfaces/IDataBehavior'
import IViewBehavior from '../Interfaces/IViewBehavior'
import Game from '../Game'

export default abstract class ModeObject{
	protected data : IDataBehavior;
	protected view : IViewBehavior;
	protected game : Game

	constructor(game : Game){
		this.game = game;
	}

	public get Game() : Game{
		return this.game;
	}

	public get Data() : IDataBehavior{
		return this.data;
	}

	public get View() : IViewBehavior{
		return this.view;
	}
} 