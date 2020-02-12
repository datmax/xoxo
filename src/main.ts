import Entity from './scripts/entity';
import Player from "./scripts/player";
import utils from "./stuff/utils";
import game from './scripts/game';
import QuadTree from './stuff/QuadTree';
import Block from "./scripts/block";



window.onload = () =>{


    //Just some sample code to make a square move.
    const canvas = <HTMLCanvasElement> document.getElementById("c");
    const c2 = <HTMLCanvasElement> document.getElementById("b");
    const ctx2 = c2.getContext("2d");
    //canvas.style.border = "thick solid black";
    canvas.width = screen.width/2;
    canvas.height = screen.height /2;
    const ctx = canvas.getContext("2d");
    const quadtree = new QuadTree(0,0, canvas.width, 0, canvas.height);
    game.quadTree = quadtree;
    const player = new Player(30,120,10,10, ctx, 100);
    //const a = new Player(10,40,5,5, ctx, 100);
    for(let i = 0; i < 40; i++){
        new Block((i+1)*40, 100, 10, 5, ctx );
    }
    for(let i = 0; i < 20; i++){
        new Block(200 + i*10, i*20, 10, 5, ctx );
    }
    for(let i = 0; i < 20; i++){
        new Block(220 + i*10, i*20, 10, 5, ctx );
    }


    quadtree.drawQuad(ctx);


    game.render();
}

