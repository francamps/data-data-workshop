Exercise 1: Data Sunrise
========================

![The sun](http://cdn0.techly.com.au/wp-content/uploads/2015/08/tumblr_nr2569nqX01qze3hdo1_r2_500.gif)

Here we will play with some downloaded data. We will work with a JSON file with some weather and geographical data from [Open Weather Map](http://www.openweathermap.org/current) and we will build a visualization of the time at which the sun rises in 5 cities around the world.

Before starting
---------------

You will need p5's IDE and a JSON file included here called [5cities\_mini.json](5cities\_mini.json).

You will also need to download [p5.js' editor from here](https://p5js.org/download/). 

As an alternative to the editor, you can also use the template for a website in the folder [source](source). In fact, we suggest you learn how to manipulate the files themselves, but you can try that on your own.

**IMPORTANT** P5 is a young library based on Processing, and is a community-run project. This editor has been deprecated in pro of a web editor that is not yet ready. We think using this editor for a workshop is useful because it helps us focus on the code and the data, and forget about putting a site together or running a server, but be aware that this editor may stop working in the future. If you want to keep working with p5 you should probably learn to use it in a regular browser or more generic editor like Atom or Sublime.

Code
----

Start here.

## 1. Start here

p5 is an implementation of Processing in javascript. The main magic happens between two functions, `setup` and `draw`. Keep refering to the documentation of [p5]() to find functions that are useful for what you want.

```
// _You may declare some variables here_
function setup() {
    // _Here you set up the variables and the canvas before starting_
}

function draw() {
    // _This function is called once every frame, so movements and dynamic functions will be called here_
}
```

In setup we can start the canvas where we are going to draw, and then draw some stuff using the `draw` function, for example, a big sun-like circle. Here we'll introduce also the notion of color.

```
var yellow;
var pink;

function setup() {
  yellow = color(255, 204, 0, 50);
  pink = color(255, 0, 190, 5);
  createCanvas(800, 600);  
}

function draw() {
  fill(yellow);
  strokeWeight(2);
  stroke(255, 255, 255);
  ellipse(mouseX, mouseY, 50, 50);
}
```

This would give you something like:

![Circles](Images/circles.png)
