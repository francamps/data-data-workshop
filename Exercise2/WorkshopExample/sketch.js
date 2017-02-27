var url;
var videoID;
var videoName;
var link = [5];
var title = [5];
var GPS;

function setup() {
  createCanvas(400,400);
  background(0);
  loadJSON(url,gotData);
  
  stroke(255);
  strokeWeight(3);
  
  GPS = select('#from');
  var button = select('#submit');
  button.mousePressed(begin);
}

function begin() {
  url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&location='+GPS.value()+'&locationRadius=100m&order=viewCount&key=AIzaSyCKT_KXHM_s29V6fHNKH-eNlOXZ-Oh6Gcc';
  loadJSON(url,gotData);
}

function gotData(data) {
  if(data) {
    document.getElementById("demo").innerHTML ="";
    videoDensity(data);
    for(var i = 0; i<data.items.length; i++) {
    videoID = data.items[i].id.videoId;
    videoName = data.items[i].snippet.title;
    link[i] = 'https://www.youtube.com/watch?v=' + videoID;
    title[i] = videoName;
    print(link[i]);
    print(title[i]);
    var result = title[i].link(link[i]);
    document.getElementById("demo").innerHTML += result + "<br>";
    }
  }
}

function videoDensity(data) {
  var numberVideos = data.pageInfo.totalResults;
  background(0);
  print(numberVideos);
  for(var i=0; i<numberVideos; i++) {
    point(random(width),random(height));
  }
}

function draw() {
}