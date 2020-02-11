import Entity from "./entity";
import utils from "../stuff/utils";
import game from "./game";
import QuadTree from "../stuff/QuadTree";
import Block from "./block";


export default class Player extends Entity {

    h: number
    w: number
    life: number
    velocity:number = 1
    moves: string[] = []
    constructor(x: number, y: number, w: number, h: number, ctx: CanvasRenderingContext2D, life: number) {
        super(x, y, ctx);
        this.w = w;
        this.h = h;
        this.enableInputHandler();
    }


    enableInputHandler():void {
        window.addEventListener("keydown", (e) => {
            this.handleKeyDown(e);
        });
        window.addEventListener("keyup", (e) => {
            this.handleKeyUp(e);
        })
    }

    handleKeyDown(event:any):void {
        if (event) {
            utils.eventHanlderDown(event, this);
        }
    }

    handleKeyUp(event:any):void {
        if (event) {
            utils.eventHanlderUp(event, this);
        }
    }


    addMove(move:string):void{
        if(this.moves[0] != move){
            this.moves.splice(0,0, move);
        }
    }

    removeMove(move:string):void{
        if(this.moves.indexOf(move) != -1){
            this.moves.splice(this.moves.indexOf(move),1);
        }
    }

    checkCollisions(): boolean {
        let objs = game.quadTree.queryObj(this);
        if(objs){
            for (let i = 0; i < objs.length; i++) {
                if(utils.rectIntersect(this.x, this.w, objs[i].x, objs[i].w) && 
                    utils.rectIntersect(this.y, this.h, objs[i].y, objs[i].h))
                    return true;
            }
        }
        
    }

    updatePos():void{
    if(this.moves.length > 0){
        if(this.moves[0] == "up"){
            this.move(0, this.velocity)
        }
        if(this.moves[0] == "down"){
            this.move(0, -this.velocity)
        }        
        if(this.moves[0] == "left"){
            this.move(-this.velocity, 0 )
        }        
        if(this.moves[0] == "right"){
            this.move(this.velocity, 0)
        }
    }
        
    }

    update():void{
        let lastPos = this.getPosition();   
        this.updatePos();
        if(this.checkCollisions()){
            this.x = lastPos.x;
            this.y = lastPos.y;
        };
    
    }

    render(): void {
            console.log(this.x, this.y);
            utils.clearRect(this.x , this.y, this.w, this.h, this.ctx);
            this.update();
            utils.drawRect(this.x, this.y, this.w, this.h, this.ctx, "black")


    }

}