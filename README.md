# XOXO 

## Game engine made with typescript running on html canvas

# Features implemented atm:
* Entity class, common to all game objects
* Player class: a gameObject that can move with arrow keys and has a life variable
* render loop
* inputHandler
* dynamic canvas creation(for a layered system)
* Quadtree space partition for efficient collision detection :DDDD


# Features WIP:
* quadtree smart query obj 
* collision detection 


# Features i want to implement:
* quadtree smart insert(for moving objects)
* 2d raycasts, for possible shooting games or else(soon)
* add images and spritesheets(soon)
* event triggers(??)
* customizable input handler
* mobile responsiveness
* scenes
* a way to get rid of that ugly code in window onload, to make the thing more presentable

---

## How to use:
* First of all, have node and npm installed on your pc
* clone the repository
* `npm install` to install npm packages
* `npm run serve` to start the local server(running on node + express, webpack hot reloading and typescript compilation included)
* `npm run build` to get an index and main.js file to host wherever you want

The core module where you create objects ecc is in the `main.ts` file. In `game.ts` you have the object pool where you can access all the gameobjects istanciated, and the game loop where you call `render()`  on the objects.
`Player.ts` is just an extension of Entity, and this is how you should create objects of your game.
For example, if you have a Skeleton enemy you'll extend the entity class and have a standard to follow.

# Feedback is very appreciated!


# Q: Why am i making this?
## A: I'm bored
