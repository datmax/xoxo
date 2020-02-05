import Entity from './scripts/entity';
import Player from "./scripts/player";
import utils from "./stuff/utils";
import game from './scripts/game';
import QuadTree from './stuff/QuadTree';



window.onload = () =>{


    //Just some sample code to make a square move.
    const canvas = <HTMLCanvasElement> document.getElementById("c");
    canvas.style.border = "thick solid black";
    canvas.width = screen.width/2;
    canvas.height = screen.height /2;
    const ctx = canvas.getContext("2d");
    const quadtree = new QuadTree(0, canvas.width, 0, canvas.height);
    game.quadTree = quadtree;
    const player = new Player(30,40,5,5, ctx, 100);
    //const a = new Player(10,40,5,5, ctx, 100);
    const b = new Player(35,45,5,5, ctx, 100);
    const c = new Player(20,40,5,5, ctx, 100);

    const d = new Player(25,60,5,5, ctx, 100);
    const f = new Player(50,100,5,5, ctx, 100);
    const g = new Player(200,400,5,5, ctx, 100);
    const h = new Player(300,300,5,5, ctx, 100);
    const i = new Player(600,200,5,5, ctx, 100);
    const j = new Player(370,300,5,5, ctx, 100);
    const k = new Player(90,370,5,5, ctx, 100);
    console.log(quadtree.queryObj(i));

    console.log(quadtree);


    game.render();
}

