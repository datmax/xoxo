import Player from "../scripts/player";

const utils = {

    eventHanlderDown(event:any, player:Player){
        switch (event.key) {
            case "ArrowUp":
                player.speed_x = 0;
                player.speed_y = 10;
                break;
            case "ArrowDown":
                player.speed_x = 0;
                player.speed_y = -10;
                break;
            case "ArrowLeft":
                player.speed_x = -10;
                player.speed_y = 0;
                break;
            case "ArrowRight":
                player.speed_x = 10;
                player.speed_y = 0;
                break;
        }
    },

    eventHanlderUp(event:any, player:Player){
        switch (event.key) {
            case "ArrowUp":
                if(player.speed_y  > 0)
                player.speed_y = 0;
                break;
            case "ArrowLeft":
                if(player.speed_x < 0)
                player.speed_x = 0;
                break;
            case "ArrowRight":
                if(player.speed_x > 0)
                player.speed_x = 0;
                break;
            case "ArrowDown":
                if(player.speed_y < 0)
                player.speed_y = 0;
                break;
        }
    },


    drawRect(x:number,y:number,w:number,h:number,ctx:CanvasRenderingContext2D,color?:string): void{
        if(color == null){
            ctx.fillRect(x,y,w,h);
        }
        else{
            ctx.fillStyle = color;
            ctx.fillRect(x,y,w,h);
        }
    },

    clearRect(x:number,y:number,w:number,h:number,ctx:CanvasRenderingContext2D):void{
        ctx.clearRect(x,y,w,h);
    }
}

export default utils;

