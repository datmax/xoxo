import Player from "../scripts/player";

interface vector {
    x: number,
    y: number
}


const utils = {


    eventHanlderDown(event: any, player: Player) {

        switch (event.key) {
            case "ArrowUp":
                player.addMove("up");
                break;
            case "ArrowDown":
                player.addMove("down");

                break;
            case "ArrowLeft":
                player.addMove("left");

                break;
            case "ArrowRight":
                player.addMove("right");
                break;
        }


    },

    eventHanlderUp(event: any, player: Player) {
        switch (event.key) {
            case "ArrowUp":
                player.removeMove("up")
                break;
            case "ArrowLeft":
                player.removeMove("left")
                break;
            case "ArrowRight":
                player.removeMove("right")
                break;
            case "ArrowDown":
                player.removeMove("down")
                break;
        }
    },


    drawRect(x: number, y: number, w: number, h: number, ctx: CanvasRenderingContext2D, color?: string): void {
        if (color == null) {
            ctx.fillRect(x, y, w, h);
        }
        else {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, w, h);
        }
    },

    clearRect(x: number, y: number, w: number, h: number, ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(x, y, w, h);
    },

    rectIntersect(a: number, b:number, a1:number, b1:number){
        return  a+b >= a1 && a <= a1+b1;
    },



}

export default utils;

