import Entity from "./entity";
import utils from "../stuff/utils";
import game from "./game";
import QuadTree from "../stuff/QuadTree";

export default class Player extends Entity {

    h: number
    w: number
    life: number
    draw: false
    speed_x: number
    speed_y: number
    moves: string[] = []


    constructor(x: number, y: number, w: number, h: number, ctx: CanvasRenderingContext2D, life: number) {
        super(x, y, ctx);
        this.w = w;
        this.h = h;
        this.speed_x = 0;
        this.speed_y = 0;
        this.enableInputHandler();
    }


    enableInputHandler() {
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


    addMove(move:string){
        if(this.moves[0] != move){
            this.moves.splice(0,0, move);
        }
    }

    removeMove(move:string){
        if(this.moves.indexOf(move) != -1){
            this.moves.splice(this.moves.indexOf(move),1);
        }
    }

    checkCollisions() {
        let objs = game.quadTree.queryObj(this);
        for (let i = 0; i < objs.length; i++) {
            if (Math.abs(this.x - objs[i].x) <= this.w && Math.abs(this.x + this.w - (objs[i].x + objs[i].w)) <= this.w
                && Math.abs(this.y - objs[i].y) <= this.h && Math.abs(this.y + this.y - (objs[i].y + objs[i].y)) <= this.h) {
                if (this.x < objs[i].x) console.log("left");
                if (this.x > objs[i].x) console.log("right");
                if (this.y < objs[i].y) console.log("top");
                if (this.y > objs[i].y) console.log("bottom");

            }
        }
    }


    update() {
        if(this.moves.length > 0){
            switch(this.moves[0]){
                case "up":
                    this.speed_x = 0;
                    this.speed_y = 10;
                    break;
                case "down":
                    this.speed_x = 0;
                    this.speed_y = -10;
                    break;
                case "left":
                    this.speed_x = -10;
                    this.speed_y = 0;
                    break;
                case "right":
                    this.speed_x = 10;
                    this.speed_y = 0;
                    break;
            }
        }
        else{
            this.speed_x = 0;
            this.speed_y = 0;
        }

    }

    render(): void {
        utils.clearRect(this.x, this.y, this.w, this.h, this.ctx);
        this.move(this.speed_x / game.gravity, this.speed_y / game.gravity);
        this.checkCollisions();
        utils.drawRect(this.x, this.y, this.w, this.h, this.ctx, "black")
    }

}