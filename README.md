# XOXO 

## Game engine made with typescript running on html canvas

# Features implemented atm:
* Entity class, common to all game objects
* Player class: a gameObject that can move with arrow keys and has a life variable
* render loop
* inputHandler
* dynamic canvas creation(for a layered system)


# Features i want to implement:
* add colliders to gameobjects, implementing some sort of algorithms to make the thing efficient
* 2d raycasts, for possible shooting games or else
* event triggers(??)
* add images and spritesheets
* customizable input handler
* mobile responsiveness

---

## How to use:
* clone the repository
* `npm install` to install npm packages
* `npm run serve` to start the local server(running on node+ express)
* `npm run build` to get an index and main.js file to host wherever you want

The core module where you create objects ecc is in the `main.ts` file. In `game.ts` you have the object pool where you can access all the gameobjects istanciated, and the game loop where you call `render()`  on the objects.
`Player.ts` is just an extension of Entity, and this is how you should create objects of your game.
For example, if you have a Skeleton enemy you'll extend the entity class and have a standard to follow.

# Feedback is very appreciated!


# Q: Why am i making this?
## A: I'm bored
