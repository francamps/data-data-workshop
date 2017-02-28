Exercice 2
==========

In this exercice, we are going to create a tool that researches youtube videos based on geolocation.

As we want to get data from youtube, we will need to use its API. API's give you access to data you will not necesseraly be able to get by just browsing the website of the service, this is why API often require a key in order to know who is doing what with the Data.

## A: Getting access to the API
First, we'll need to subscribe to the API and get our user key from it:
https://console.developers.google.com/apis/dashboard?project=test-159315&duration=PT1H
Go on that website and get a key for the "youtube data API"

Now you have an API key, Great! But how do you go from that to the data you want to extract? 
Whenever you work with API, the first thing to do is to consult the documentation. Depending on the API's It's more or less well made, but you will need to deal with it because it's your only way to understand how to work with the API.

https://developers.google.com/youtube/v3/docs/search/list

## B: Getting access to the data we need
In order to complete our task, we need to research for videos depending on their geolocation. 
Let's take a look on the Search/List section of the reference. 
We can see the HTTP request example with a list of different parameters. We can now create our request : 
https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&location=48.881311,2.076968&locationRadius=1km&order=viewCount&key=A

with this URL, you should access a JSON page that looks like this:

**JSON**
```
{
  "kind": "youtube#searchListResponse",
  "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/oABz3UmuCpKcjosDBd0yg2YxLtM\"",
  "nextPageToken": "CAUQAA",
  "regionCode": "GB",
  "pageInfo": {
    "totalResults": 1181,
    "resultsPerPage": 5
  },
  "items": [
  {
  "kind": "youtube#searchResult",
  "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/nChV1-Y8eLWG2LAGuC99KHwR7qk\"",
  "id": {
    "kind": "youtube#video",
    "videoId": "VIkG0UlCh9s"
  },
  etc.
```


## C: Getting the data into P5 and transforming it
The JSON request we made gives us access to the most viewed youtube videos uploaded within 100m from a precise location. We would like to create a webpage that lists the names and links to those videos.

### 1: Importing the file into P5
First, we need to load the file that we have on our browser into P5.
Then we are going to print the data we get in the console.

**sketch.js**
```
var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&location=48.848998,%202.347541&locationRadius=100m&order=viewCount&key=[KEY]'

function setup() {
  loadJSON(url,gotData);
}

function gotData(data) {
  print(data);
}
```

### 2: Parsing the data into P5
The query we made allows us to access a list of videos uploaded within 100m of a specific GPS point and classified depending on their number of views. 
For our webpage, we whant to give the user access to those videos using their title and a link to the video.
To do so, we need to extract the names of the videos and their link from the JSON file.

The link to a youtube can be split into two parts : 
the link to youtube + A video ID
https://www.youtube.com/watch?v= + videoID
In our JSON file, the video ID is stored into: items[x].id.videoID
The title of the video is stored into: items[x].snippet.title
(the path is items[x] because this section of the file is an array: a box that contains 'x'similar boxes)

**sketch.js**
```
var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&location=48.848998,%202.347541&locationRadius=100m&order=viewCount&key=[KEY]'
var videoID;
var videoName;
var link = [5];
var title = [5];


function setup() {
  loadJSON(url,gotData); 
}

function gotData(data) {
  if(data) {
    for(var i = 0; i<data.items.length; i++) {
    videoID = data.items[i].id.videoId;
    videoName = data.items[i].snippet.title;
    link[i] = 'https://www.youtube.com/watch?v=' + videoID;
    title[i] = videoName;
    print(link[i]);
    print(title[i]);
    }
  }
}
```

### 2: From JSON to P5, from P5 to HTML
Now that we have access to the information, we can write a program that enters each of the boxes and gets the information we need.
Then, we'll transfer those information to our HTML code to display them as links.

**index.html**
```
<body>
  <p id = "demo"></p>
</body>
```

**sketch.js**
```
link[i] = 'https://www.youtube.com/watch?v=' + videoID;
title[i] = videoName;
var result = title[i].link(link[i]);
document.getElementById("demo").innerHTML += result + "<br>";
```

## D: Going further

### 1: Local video density map
Now we are going to create a youtube video density map. To do this in a really simple way, we are just going to make a black screen with 'n' points randomly displayed where 'n' is the number of videos that have been uploaded within 100m, in other words the number of results that we have.
Luckily for us, we can directly find this data in our api query. our drawing method will be the following: count from 0 to numberVideos, and display a point at a random position at each stage.

**sketch.js**
```
function videoDensity(data) {
  background(0);
  var numberVideos = data.pageInfo.totalResults;
  print(numberVideos);
  for(var i=0; i<numberVideos; i++) {
    point(random(width),random(height));
  }
}
```

### 2: Input field for GPS data
Now we have a webpage that shows us the most viewed youtube videos within 100m, but the GPS point is fixed, we could modify it to give the user the opportunity to select the area he wants video from.
In order to do so, we will have to work a bit more with the HTML of our project.

First, let's create a new HTML imput fiels and submit button in order to be able to enter and transfer information between our page and our script :

**index.html**
```
<p>
  Get me local videos from (gps data) <input id ="from" value=""></input>
  <button id="submit">submit</button>
</p>
```

if you run your sketch, you should be able to see an input field and a submit button on the page. 
Now that we have those HTML elements, we need to make them communicate with our script:

**sketch.js**
```
var url;
var videoID;
var videoName;
var link = [5];
var title = [5];
var gpsInput;


function setup() {
  createCanvas(400,400);
  loadJSON(url,gotData);
  
  gpsInput = select('#from');
  var button = select('#submit');
  button.mousePressed(begin);
}
```
The last 3 lines of the setup function are there to connect the HTML elements to our script by Id spectification. Note that we deleted the url from the variables as we will need to change it depending on the value of the input field. We are going to do that in the 'begin' function that will be executed each time that we press the submit button.
In order to change our API query url dinamically, we need to take out the gps data out of our url and put our variable instead.

**sketch.js**
```
function begin() {
  url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&location=' 
  + gpsInput.value() + 
  '&locationRadius=100m&order=viewCount&key=AIzaSyCKT_KXHM_s29V6fHNKH-eNlOXZ-Oh6Gcc';
  loadJSON(url,gotData);
}
```
