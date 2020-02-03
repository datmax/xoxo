# XOXO 

## This is an experiment to see how much i can do alone in javascript c:

# Features implemented atm:
* Entity class, common to all game objects
* Player class: a gameObject that can move with arrow keys and has a life variable
* render loop

# Features i want to implement:
* MAYBE COMMENT SOMETHING TO UNDERSTAND WHAT AM I DOING????
* add colliders to gameobjects, implementing some sort of algorithms to make the thing efficient
* 2d raycasts, for possible shooting games or else
* event triggers(??)
* add images and spritesheets
* create canvases to make a layered layout

---

## How to use:
* clone the repository
* `npm install` to install npm packages
* `npm run serve` to start the local server(running on node+ express)

The core module where you create objects ecc is in the `main.ts` file. In `game.ts` you have the object pool where you can access all the gameobjects istanciated,
and the game loop where you call `render()`  on the objects.

