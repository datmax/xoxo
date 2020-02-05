import game from "../scripts/game";
import Entity from "../scripts/entity";


class QuadTree{
    regions:QuadTree[] = []
    objs: Entity[] = []

    max = 4

    x:number
    y:number
    w:number
    h:number
    
    constructor(x:number, w: number, y: number, h: number){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    subdivide():void{
        console.log("subdivide");
        this.regions.push(new QuadTree(this.x, this.w/2, this.y ,this.h/2)); //TOP LEFT
        this.regions.push(new QuadTree((this.x + this.w)/2, this.w/2, this.y, this.h/2)); //TOP RIGHT
        this.regions.push(new QuadTree(this.x, this.w/2, (this.y + this.h)/ 2, this.h/2)); //BOTTOM LEFT
        this.regions.push(new QuadTree((this.x, this.w)/2, this.w/2, (this.y + this.h)/ 2, this.h/2)); //BOTTOM RIGHT

        for(let i = 0; i < this.objs.length; i++){
            this.insert(this.objs[i]);
        }

        this.objs = [];
    }


    insert(obj:Entity):void{
        if(this.objs.length >= this.max && this.regions.length == 0){
            this.subdivide();
        }
        else{
           if(this.regions.length == 0){
               if(obj.x >= this.x && obj.x + obj.w <= this.x + this.w && obj.y >= this.y && obj.y + obj.h <= this.y + this.h){
                   this.objs.push(obj);
               }
           }
        }
        if(this.regions.length > 0){
            for(let i = 0; i < this.regions.length; i++){
                this.regions[i].insert(obj);
            }
        }
        
    }

}


export default QuadTree;