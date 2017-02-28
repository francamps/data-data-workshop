// DATA IN JSON FORMAT
// It is usually loaded separately, but let's start here
// Jump to the end of this to line 66
// =====================================================

var data = {
  "today": 1488326400,
  "list": [
    {
      "sunrise": 1488349619,
      "temp": 16.5,
      "wind": {
        "speed": 2.1,
        "deg": 230
      },
      "id": 6356055,
      "name": "Barcelona"
    },
    {
      "sunrise": 1488358110,
      "temp": 27.08,
      "wind": {
        "speed": 1.5,
        "deg": 160
      },
      "id": 3451190,
      "name": "Rio de Janeiro"
    },
    {
      "sunrise": 1488319487,
      "temp": -0.71,
      "wind": {
        "speed": 0.5,
        "deg": 130
      },
      "id": 1835848,
      "name": "Seoul"
    },
    {
      "sunrise": 1488378122,
      "temp": 8.3,
      "wind": {
        "speed": 1.05,
        "deg": 95.0024
      },
      "id": 5368361,
      "name": "Los Angeles"
    },
    {
      "sunrise": 1488337514,
      "temp": 16.31,
      "wind": {
        "speed": 6.2,
        "deg": 270
      },
      "id": 112931,
      "name": "Tehran"
    }
  ]
};

// CODE WILL START HERE
// =====================
var yellow;
var pink;

var weather;
/*function preload() {
  var url = '../5cities_mini.json';
  weather = loadJSON(url);
}*/

var WIDTH = 800;
var HEIGHT = 400;

function setup() {
  frameRate(30);
  yellow = color(255, 204, 0);
  pink = color(255, 0, 190, 80);
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
    fill(0);
    text(data.list[i].name + ": " + sunrise, cityX, 350);

    fill(255, 204, 0);
    strokeWeight(2);
    stroke(255, 255, 255);
    ellipse(cityX + 25, 300 - (sunrise * 200/84600), 50, 50);
  }
}
