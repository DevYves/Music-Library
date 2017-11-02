var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


printPlaylists: function(){
  for (var playListName in this.playlists){
  console.log(playListName + ": " + this.playlists[playListName].name + " - " + this.playlists[playListName].tracks.length + " tracks");
  }
},
printTracks: function () {
  for (var trackList in library.tracks){
  console.log(trackList + ": " + library.tracks[trackList].name + " by " + library.tracks[trackList].artist + " (" + library.tracks[trackList].album + " )");
}
},

printPlaylist : function (playlistId) {
  if (playlistId === 'p01') {
    console.log(playlistId + ": " + library.playlists[playlistId].name + ' - ' + library.playlists[playlistId].tracks.length + " tracks");
    for (var trackList in library.playlists.p01.tracks){
      var tracker = library.playlists.p01.tracks[trackList];
      console.log(library.playlists.p01.tracks[trackList] + ": " + library.tracks[tracker].name + " by " + library.tracks[tracker].artist + " (" + library.tracks[tracker].album + ")");
    }
  }
  else {
   console.log(playlistId + ": " + library.playlists[playlistId].name + ' - ' + library.playlists[playlistId].tracks.length + " tracks");
    for (var trackList in library.playlists.p02.tracks){
      var tracker = library.playlists.p02.tracks[trackList];
      console.log(library.playlists.p02.tracks[trackList] + ": " + library.tracks[tracker].name + " by " + library.tracks[tracker].artist + " (" + library.tracks[tracker].album + ")");
    }
  }
},

addTrackToPlaylist : function (trackId, playlistId) {
  library.playlists[playlistId]['tracks'].push(trackId);
  console.log(library.playlists[playlistId]);

},

uid : function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},

addTrack : function (name, artist, album) {

id = this.uid();
library.tracks.t04 = {
  id,
  name,
  artist,
  album};
  console.log(library.tracks)
},

addPlaylist : function (name) {



id = this.uid();
tracks = "Done PIGGGY!";
library.playlists.p03 = {
  id,
  name,
  tracks};
  console.log(library.playlists);
},

}

library.printPlaylists();
library.printTracks();
library.printPlaylist('p02');
library.addTrackToPlaylist('t01', 'p02');
library.addTrack("Jam", "Ham Storm" , "Belly Button Hunky");
library.addPlaylist("Hammy");


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks




// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)




// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)






// return printPlaylist;


// adds an existing track to an existing playlist




// generates a unique id
// (use this for addTrack and addPlaylist)




// adds a track to the library




// adds a playlist to the library





// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}