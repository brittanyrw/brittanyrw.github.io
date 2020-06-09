const lyrics = [
	"🎵 “I am not throwing away my shot” 💵",
	"🎵 “A spoonful of sugar helps the medicine go down” 🥄",
	"🎵 “It's the circle of lifeeeeee” 🦁",
	"🎵 “I miss the mountains” 🗻",
	"🎵 “What would I do if I hadn't met you” 💔",
	"🎵 “Telephone wire, long black line”"
]

function randomMusicalLyrics(lyrics){
	console.log(
    "%c" + "Random Musical Theater Lyric: \n" +
      lyrics[Math.floor(Math.random() * lyrics.length)],
    "color: black; font-size: 15px; font-family: arial;"
  );
}

$(document).ready(function(){

	randomMusicalLyrics(lyrics);
	
  });
