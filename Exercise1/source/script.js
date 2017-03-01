// CODE WILL START HERE
// =====================
var data;
function preload() {
  var url = '../5cities_mini.json';
  data = loadJSON(url);
}

var yellow;
var pink;
var WIDTH = 800;
var HEIGHT = 400;
var labelsHeight = 50;
var skyHeight = HEIGHT - labelsHeight;
var seconds;

function setup() {
  frameRate(30);
  seconds = 0;
  
  heightSpeed = skyHeight / 86400;
  
  yellow = color(255, 204, 0);
  pink = color(154, 124, 191);
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  background(255);

  seconds = (frameCount/30)*1000;

  for (var i = 0; i < data.list.length; i++) {
    var sunrise = data.list[i].sunrise - data.today;
    var cityX = 130 * i + 30;
    var sunHeight = skyHeight - (skyHeight * sunrise/84600);
    
    var y = sunHeight - seconds * heightSpeed;

    // Background sky
    fill(pink)
    rect(cityX - 30, 0, 130, skyHeight)

    // Suns
    fill(255, 204, 0);
    strokeWeight(2);
    stroke(255, 255, 255);
    ellipse(cityX + 35, y, 50, 50);

    // Labels
    fill(255);
    rect(cityX, skyHeight, 130, 50);
    fill(0);
    textAlign(CENTER);
    text(data.list[i].name, cityX + 35, HEIGHT - 20);
  }
  
  // Second counter
  fill(0);
  text(seconds.toFixed(0), 30, 30);
}
