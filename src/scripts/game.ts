import Entity from "./entity";

const game = {

    //Global game objects
    //Still have to find a good way to implement physics
    deltaTime:<number> 0.016,
    objects:<Entity[]> [],
    layers:<HTMLCanvasElement[]> [],
    gravity: 0.5,


    //Add canvas with a given id, width and height;
    addCanvas( w:number, h:number, id?:string,):void{
        let canvas = document.createElement("canvas");
        if(id) canvas.id = id;
        canvas.width = w;
        canvas.height = h;
    },

    addObject(obj: Entity): void {
        console.log(obj);
        this.objects.push(obj);
    },


        
    render(): void{
        for(let i = 0; i < this.objects.length; i++){
            this.objects[i].render();
        }
        window.requestAnimationFrame(()=>{
            this.render();
        })
    }

}


export default game;