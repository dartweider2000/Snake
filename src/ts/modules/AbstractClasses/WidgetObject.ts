export default class WidgetObject{
	protected x : number;
	protected y : number;
	protected fontSize : number;
	protected color : string;
	protected fill : string;
	protected stroke : string;
	protected width : number;
	protected height : number;
	protected lineWidth : number;

	public get Left() : number{
		return this.x;
	}

	public get Top() : number{
		return this.y;
	}

	public get FontSize() : number{
		return this.fontSize;
	}

	public get Color() : string {
		return this.color;
	}

	public get Width() : number{
		return this.width;
	}

	public get Height() : number{
		return this.height;
	}

	public get Fill() : string{
		return this.fill;
	}

	public get Stroke() : string{
		return this.stroke;
	}

	public get LineWidth() : number{
		return this.lineWidth;
	}
}