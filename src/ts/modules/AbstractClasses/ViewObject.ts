export default abstract class ViewObject{
	protected canv : HTMLCanvasElement;
	protected cx : CanvasRenderingContext2D;
	
	private parent : HTMLElement;

	constructor(){
		this.canv = document.querySelector('.canvas');
		this.cx = this.canv.getContext('2d');
		this.parent = this.canv.parentElement;

		this.canv.width = this.parent.offsetWidth;
		this.canv.height = this.parent.offsetHeight;
	}

	public get Canv() : HTMLCanvasElement{
		return this.canv;
	}

	public get CX() : CanvasRenderingContext2D{
		return this.cx;
	}
}