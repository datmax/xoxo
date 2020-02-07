import Entity from "./entity";
import utils from "../stuff/utils";
import game from "./game";
import QuadTree from "../stuff/QuadTree";

export default class Player extends Entity {

    h: number;
    w: number;
    life: number;
    draw: false;
    speed_x: number;
    speed_y: number;
    


    constructor(x:number, y:number, w:number, h:number, ctx:CanvasRenderingContext2D, life:number) {
        super(x, y, ctx);
        this.w = w;
        this.h = h;
        this.speed_x = 0;
        this.speed_y = 0;
        this.enableInputHandler();
    }


    enableInputHandler(){
        window.addEventListener("keydown", (e) => {
            this.handleKeyDown(e);
        });
        window.addEventListener("keyup", (e) => {
            this.handleKeyUp(e);
        })
    }

    handleKeyDown(event) {
        if (event) {
            utils.eventHanlderDown(event, this);
            }
        }

    handleKeyUp(event) {
        if (event) {
            utils.eventHanlderUp(event, this);
        }
    }

    checkCollisions(){
        let objs = game.quadTree.queryObj(this);
        for(let i = 0; i < objs.length; i++){
            if(this.x >= objs[i].x && this.x + this.w <= objs[i].x + objs[i].w 
               && this.y >= objs[i].y && this.y + this.h <= objs[i].y + objs[i].h && typeof objs[i] != typeof this){
                   console.log(objs[i]);
               }
        }
    }

    render(): void {
        utils.clearRect(this.x, this.y, this.w, this.h, this.ctx);
        this.move(this.speed_x / game.gravity, this.speed_y/game.gravity);
        this.checkCollisions();
        utils.drawRect(this.x, this.y, this.w, this.h, this.ctx, "black")
    }

}