import Entity from "./entity";
import QuadTree from "../stuff/QuadTree";

interface Sprite {
    name: string,
    src: string
}

const game = {

    //Global game objects
    //Still have to find a good way to implement physics
    deltaTime: <number>0.016,
    objects: <Entity[]>[],
    layers: <HTMLCanvasElement[]>[],
    gravity: 10,
    quadTree: <QuadTree>null,
    sprites: <Sprite[]>[],


    //Add canvas with a given id, width and height;
    addCanvas(w: number, h: number, id?: string, ): void {
        let canvas = document.createElement("canvas");
        if (id) canvas.id = id;
        canvas.width = w;
        canvas.height = h;
    },

    addObject(obj: Entity): void {
        this.objects.push(obj);
    },

    addSprite(name: string, src: string) {
        this.sprites.push({ name, src });
    },

    render(): void {
        for (let i = 0; i < this.objects.length; i++) {
            this.objects[i].update();
            this.objects[i].render();
        }
        window.requestAnimationFrame(() => {
            this.render();
        })
    }

}


export default game;