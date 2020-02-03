import Entity from "./entity";
import utils from "./utils";

export default class Player extends Entity {

    h: number;
    w: number;
    life: number;
    draw: false;
    speed_x: number;
    speed_y: number


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
            switch (event.key) {
                case "ArrowUp":
                    this.speed_x = 0;
                    this.speed_y = 10;
                    break;
                case "ArrowDown":
                    this.speed_x = 0;
                    this.speed_y = -10;
                    break;
                case "ArrowLeft":
                    this.speed_x = -10;
                    this.speed_y = 0;
                    break;
                case "ArrowRight":
                    this.speed_x = 10;
                    this.speed_y = 0;
                    break;
            }
        }

    }

    handleKeyUp(event) {
        if (event) {
            switch (event.key) {
                case "ArrowUp":
                    if(this.speed_y  > 0)
                    this.speed_y = 0;
                    break;
                case "ArrowLeft":
                    if(this.speed_x < 0)
                    this.speed_x = 0;
                    break;
                case "ArrowRight":
                    if(this.speed_x > 0)
                    this.speed_x = 0;
                    break;
                case "ArrowDown":
                    if(this.speed_y < 0)
                    this.speed_y = 0;
                    break;
            }
        }
    }

    render(): void {
        console.log(this.speed_x, this.speed_y);
        utils.clearRect(this.x, this.y, this.w, this.h, this.ctx);
        this.move(this.speed_x, this.speed_y);
        utils.drawRect(this.x, this.y, this.w, this.h, this.ctx, "black")
    }

}