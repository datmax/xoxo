import Entity from "./entity";

const game = {
    objects:<Entity[]> [],

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