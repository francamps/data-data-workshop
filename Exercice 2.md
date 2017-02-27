Exercice 2: 
In this exercice, we are going to create a tool that researches youtube videos based on geolocation.

As we want to get data from youtube, we will need to use It's API. API's give you access to data you will not necesseraly be able to get by just browsing the website of the service, this is why API often require a key in order to know who is doing what with the Data.

First, we'll need to subscribe to the API and get our user key from it:
https://console.developers.google.com/apis/dashboard?project=test-159315&duration=PT1H
Go on that website and get a key for the "youtube data API"

Now you have an API key, Great! But how do you go from that to the data you want to extract? 
Whenever you work with API, the first thing to do is to consult the documentation. Depending on the API's It's more or less well made, but you will need to deal with it because it's your only way to understand how to work with the API.

https://developers.google.com/youtube/v3/docs/search/list

In order to complete our task, we need to research for videos depending on their geolocation. 
Let's take a look on the Search/List section of the reference. 
We can see the HTTP request example with a list of different parameters. We can now create our request : 
https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&location=48.881311,2.076968&locationRadius=1km&order=viewCount&key=A

If we type this as a request in the browser, we can see a list of informations appearing. 
What we are now going to do is to use P5 to re use this information.

First, we need to load the file that we have on our browser into P5.
Then we are going to print the data we get in the console.
The JSON request we made gives us access to the most viewed youtube videos uploaded within 100meters from a precise location. We would like to create a webpage that lists the names and links to those videos.

In order to do so, we first need access the specific data we need, then store it and display it under the form of clickable links.
