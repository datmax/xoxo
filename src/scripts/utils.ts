const utils = {


    

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

