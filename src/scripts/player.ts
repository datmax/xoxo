import Entity from "./entity";
import utils from "../stuff/utils";
import game from "./game";

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
        this.life = life;
        this.speed_x = 0;
        this.speed_y = 0;
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

    render(): void {
        utils.clearRect(this.x, this.y, this.w, this.h, this.ctx);
        this.move(this.speed_x * game.gravity, this.speed_y*game.gravity);
        //console.log(this.x, this.y)
        utils.drawRect(this.x, this.y, this.w, this.h, this.ctx, "black")
    }

}