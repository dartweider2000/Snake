export default abstract class ViewObject{
	protected canv;
	protected cx;

	constructor(){
		this.canv = document.querySelector('.canvas') as HTMLCanvasElement;
		this.cx = this.canv.getContext('2d');
	}
}