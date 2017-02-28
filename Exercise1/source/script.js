// DATA IN JSON FORMAT
// It is usually loaded separately, but let's start here
// Jump to the end of this to line 185
// =====================================================

var data = {
  "list": [
    {
      "coord": {
        "lon": 2.13,
        "lat": 41.4
      },
      "sys": {
        "sunrise": 1488090561,
        "sunset": 1488130747
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "Sky is Clear"
        }
      ],
      "main": {
        "temp": 16.5,
        "pressure": 1018,
        "humidity": 45,
        "temp_min": 15,
        "temp_max": 18
      },
      "visibility": 10000,
      "wind": {
        "speed": 2.1,
        "deg": 230
      },
      "clouds": {
        "all": 0
      },
      "id": 6356055,
      "name": "Barcelona"
    },
    {
      "coord": {
        "lon": -43.21,
        "lat": -22.9
      },
      "sys": {
        "sunrise": 1488098860,
        "sunset": 1488144206
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds"
        }
      ],
      "main": {
        "temp": 27.08,
        "pressure": 1013,
        "humidity": 74,
        "temp_min": 26,
        "temp_max": 28
      },
      "visibility": 10000,
      "wind": {
        "speed": 1.5,
        "deg": 160
      },
      "clouds": {
        "all": 75
      },
      "dt": 1488121200,
      "id": 3451190,
      "name": "Rio de Janeiro"
    },
    {
      "coord": {
        "lon": 126.98,
        "lat": 37.57
      },
      "sys": {
        "sunrise": 1488060412,
        "sunset": 1488100975
      },
      "weather": [
        {
          "id": 721,
          "main": "Haze",
          "description": "haze",
          "icon": "50n"
        }
      ],
      "main": {
        "temp": -0.71,
        "pressure": 1027,
        "humidity": 68,
        "temp_min": -4,
        "temp_max": 2
      },
      "visibility": 10000,
      "wind": {
        "speed": 0.5,
        "deg": 130
      },
      "clouds": {
        "all": 1
      },
      "id": 1835848,
      "name": "Seoul"
    },
    {
      "coord": {
        "lon": -118.24,
        "lat": 34.05
      },
      "sys": {
        "sunrise": 1488119035,
        "sunset": 1488160044
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "main": {
        "temp": 8.3,
        "pressure": 1016,
        "humidity": 87,
        "temp_min": 4,
        "temp_max": 11
      },
      "visibility": 16093,
      "wind": {
        "speed": 1.05,
        "deg": 95.0024
      },
      "clouds": {
        "all": 90
      },
      "id": 5368361,
      "name": "Los Angeles"
    },
    {
      "coord": {
        "lon": 51.42,
        "lat": 35.69
      },
      "sys": {
        "sunrise": 1488078431,
        "sunset": 1488119219
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "Sky is Clear",
          "icon": "01n"
        }
      ],
      "main": {
        "temp": 16.31,
        "pressure": 1017,
        "humidity": 12,
        "temp_min": 15,
        "temp_max": 17
      },
      "visibility": 10000,
      "wind": {
        "speed": 6.2,
        "deg": 270
      },
      "clouds": {
        "all": 0
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
ver HEIGHT = 600;

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
  ellipse(mouseX, mouseY, 50, 50);
  fill(0);
  text((frameCount/30).toFixed(2), 10, 10);
  
  var lastMidNight = new Date(2017, 01, 26, 0, 0,0).getTime()/1000;
  
  for (var i = 0; i < data.list.length; i++) {
    var sunrise = data.list[i].sys.sunrise - lastMidNight;
    var cityX = 130*i+30;
    fill(0);
    text(data.list[i].name + ": " + sunrise, cityX, 550);

    fill(255, 204, 0, 300*sunrise / 84600);
    strokeWeight(2);
    stroke(255, 255, 255);
    ellipse(cityX + 25, 500 - (sunrise * 200/84600), 50, 50);
  }
}
