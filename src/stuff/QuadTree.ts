import game from "../scripts/game";
import Entity from "../scripts/entity";
import utils from "./utils";

//----------------------------------------------------------------//
//--------THIS TOOK ME AN ENTIRE FUCKING DAY AAAAAAAA-------------//
//----------------------------------------------------------------//

class QuadTree {
    regions: QuadTree[] = []
    objs: Entity[] = []

    max = 8

    x: number
    y: number
    w: number
    h: number
    level: number
    offset = 5

    constructor(level: number, x: number, w: number, y: number, h: number) {
        this.level = level;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }


    //Create the four regions. Then clear this.objs because 
    //only the leafs should have elements in objs
    subdivide(): void {
        let temp = [];
        temp = this.objs;
        this.objs = [];
        this.regions.push(new QuadTree(this.level + 1, this.x, this.w / 2, this.y, this.h / 2)); //TOP LEFT
        this.regions.push(new QuadTree(this.level + 1, this.x + this.w / 2, this.w / 2, this.y, this.h / 2)); //TOP RIGHT
        this.regions.push(new QuadTree(this.level + 1, this.x, this.w / 2, this.y + this.h / 2, this.h / 2)); //BOTTOM LEFT
        this.regions.push(new QuadTree(this.level + 1, this.x + this.w / 2, this.w / 2, this.y + this.h / 2, this.h / 2)); //BOTTOM RIGHT

        for (let i = 0; i < temp.length; i++) {
            this.insert(temp[i]);
        }

    }


    insert(obj: Entity): void {
        if (this.objs.length >= this.max && this.regions.length == 0) {
            this.subdivide();
        }
        else {
            if (this.regions.length == 0) {
                if (obj.x >= this.x && obj.x <= this.x + this.w && obj.y >= this.y && obj.y <= this.y + this.h) {
                    this.objs.push(obj);
                }
            }
        }
        if (this.regions.length > 0 && this.level < 5) {
            for (let i = 0; i < this.regions.length; i++) {
                this.regions[i].insert(obj);
            }
        }
        if (this.level >= 5) {
            this.objs.push(obj);
        }

    }

    queryObj(obj: Entity): Entity[] {
        if (this.regions.length == 0) {
            return this.objs;
        }
        else {
            if (obj.x + this.offset >= this.x && obj.x + obj.w <= this.x + this.w / 2 && obj.y >= this.y && obj.y + obj.h - this.offset <= this.y + this.h / 2) {
                return this.regions[0].queryObj(obj);
            }
            if (obj.x + this.offset >= this.x + this.w / 2 && obj.x + obj.w - this.offset <= this.x + this.w && obj.y + this.offset >= this.y && obj.y + obj.h - this.offset <= this.y + this.h / 2) {
                return this.regions[1].queryObj(obj);
            }
            if (obj.x + this.offset >= this.x && obj.x + obj.w <= this.x + this.w / 2 && obj.y >= this.y + this.h / 2 && obj.y + obj.h - this.offset <= this.y + this.h) {
                return this.regions[2].queryObj(obj);
            }
            if (obj.x + this.offset >= this.x + this.w / 2 && obj.x + obj.w - this.offset <= this.x + this.w && obj.y + this.offset >= this.y + this.h / 2 && obj.y + obj.h - this.offset <= this.y + this.h) {
                return this.regions[3].queryObj(obj);
            }
        }
    }

    drawQuad(ctx: CanvasRenderingContext2D): void {
        utils.drawRect(Math.floor(this.x + this.w / 2), Math.floor(this.y), 1, Math.floor(this.h), ctx, "red");
        utils.drawRect(Math.floor(this.x), Math.floor(this.y + this.h / 2), Math.floor(this.w), 1, ctx, "blue");
        if (this.regions.length > 0) {
            for (let i = 0; i < this.regions.length; i++) {
                this.regions[i].drawQuad(ctx);
            }
        }
    }

}


export default QuadTree;