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

function setup() {
  frameRate(30);
  yellow = color(255, 204, 0);
  pink = color(154, 124, 191);
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  background(255);
  fill(yellow);
  strokeWeight(2);
  stroke(255, 255, 255);
  fill(0);
  text((frameCount/30).toFixed(2), 10, 10);


  for (var i = 0; i < data.list.length; i++) {
    var sunrise = data.list[i].sunrise - data.today;
    var cityX = 130 * i + 30;
    var sunHeight = skyHeight - (skyHeight * sunrise/84600);
    
    // Labels
    fill(0);
    textAlign(CENTER);
    text(data.list[i].name, cityX + 35, HEIGHT - 20);

    // Background sky
    fill(pink)
    //rect(cityX - 30, 0, 130, skyHeight)

    // Suns
    fill(255, 204, 0);
    strokeWeight(2);
    stroke(255, 255, 255);
    //ellipse(cityX + 35, sunHeight, 50, 50);
  }
}
