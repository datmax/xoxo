import game from "./game";
import utils from "../stuff/utils";
import Player from "./player";

interface vector {
  x: number,
  y: number
}

export default class Entity {

  x: number;
  y: number;
  w = 0;
  h = 0;
  ctx: CanvasRenderingContext2D;
  sprite: string



  //Default path, for patrolling things
  defaultPath: boolean
  path: vector[]

  //Sets entity position in given canvas context
  constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    game.addObject(this);
  }


  //This function is called ALWAYS betweeen a clear and a draw cycle, to not
  //have weird things happening
  move(x: number, y: number): void {
    this.x += x;
    this.y -= y;
  }


  //Still doesn't work, searching for a good approach 
  addSprite(path: string): void {
    this.sprite = path;
  }

  setDefaultPath(path: vector[]): void {
    this.defaultPath = true;
    this.path = path;
  }

  getPosition(): { x: number; y: number } {
    return {
      x: this.x,
      y: this.y
    }
  }

  redraw():void{
    utils.drawRect(this.x, this.y, this.w, this.h, this.ctx);
}


  update():void{
    
  }

  render(): void {
  }



}
