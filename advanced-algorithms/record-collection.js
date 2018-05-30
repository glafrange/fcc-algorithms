var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if(prop !== "tracks" && value.length > 1) {
    collection[id].artist = value;
  }else if(prop === "tracks" && !collection[id].tracks) {
    collection[id].tracks = [];
    collection[id].tracks.push(value);
  } else if (value === "") {
    delete collection[id][prop];
  } else {
    collection[id].tracks.push(value);
  }
  return collection;
}

// Alter values below to test your code
updateRecords(2548, "tracks", "");

