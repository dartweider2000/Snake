import PlayObject from '../AbstractClasses/PlayObject'

export default interface IRenderBehavior{
	render(cx : CanvasRenderingContext2D, self : PlayObject) : void
}