var queenInfo = null;

var requestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var data = JSON.parse(jsonString); 
  queenInfo = data;
  console.log(queenInfo);
}


var makeRequest = function(url, callback){

 var request = new XMLHttpRequest();
 request.open("GET", url);
 request.onload = callback;
 request.send();
}

var getRandTrackName = function(){
    var trackList = queenInfo.message.body.track_list;
    var randTrack = trackList[Math.floor(Math.random() * trackList.length) + 1];
     return randTrack.track;
}

var handlePlayButtonClick = function(){
  var trackSpan = document.querySelector('#track_name');
  var randTrack = getRandTrackName();
  trackSpan.innerText = randTrack.track_name;
  var albumSpan = document.querySelector('#album_name');
  albumSpan.innerText = "From the album: " + randTrack.album_name;
  
  // var lyricsButton = document.querySelector('#show_lyrics');
  // lyricsButton.onclick = function() {
  //   var showLyrics = document.querySelector('#lyrics');
  //   lyrics.innerText = track.lyrics.get? + randTrack.track_id;
}


var app = function(){
 var url = "https://api.musixmatch.com/ws/1.1/track.search?q_artist=queen&apikey=c17104ee89c3dd905f1490fa74fdaee0";
 makeRequest(url, requestComplete);
console.log("after request")
 // console.log(queenInfo['message']['body']['track_list']['track']['track_name']);
 var playButton = document.querySelector('#play');
 playButton.onclick = handlePlayButtonClick;
}

window.onload = app;
