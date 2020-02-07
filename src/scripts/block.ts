import Entity from "./entity";
import utils from "../stuff/utils";


export default class Block extends Entity{
    constructor(x:number, y:number, w:number, h:number, ctx:CanvasRenderingContext2D) {
        super(x, y, ctx);
        this.w = w;
        this.h = h;
        utils.drawRect(this.x, this.y, this.w, this.h, this.ctx);
    }

    
    

}