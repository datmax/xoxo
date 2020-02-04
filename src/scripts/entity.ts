import game from "./game";
import utils from "./utils";

export default class Entity {
  
  x: number;
  y:number;
  ctx: CanvasRenderingContext2D;
  sprite: string

  //Sets entity position in given canvas context
  constructor(x:number, y:number, ctx:CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    game.addObject(this);
  }


  //This function is called ALWAYS betweeen a clear and a draw cycle, to not
  //have weird things happening
  move(x:number, y:number):void{
    this.x += x;
    this.y -= y;
  }


  //Still doesn't work, searching for a good approach 
  addSprite(path: string): void{
    this.sprite = path;
  } 

  getPosition(): {x: number; y:number}{
    return {
      x: this.x,
      y: this.y
    }
  }



  /*update(){
    this.x += x;
    this.y += y;
}*/

  render(): void{
  }



}
