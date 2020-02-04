import Entity from './scripts/entity';
import Player from "./scripts/player";
import utils from "./scripts/utils";
import game from './scripts/game';



window.onload = () =>{

    const canvas = <HTMLCanvasElement> document.getElementById("c");
    canvas.width = screen.width/2;
    canvas.height = screen.height /1.5;
    const ctx = canvas.getContext("2d");
    const player = new Player(30,40,20,20, ctx, 100);
    game.render();
}

