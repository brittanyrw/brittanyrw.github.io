const lyrics = [
	"🎵 “I am not throwing away my shot” 💵",
	"🎵 “A spoonful of sugar helps the medicine go down” 🥄",
	"🎵 “It's the circle of lifeeeeee” 🦁",
	"🎵 “I miss the mountains” 🗻",
	"🎵 “What would I do if I hadn't met you” 💔",
	"🎵 “Telephone wire, long black line”"
]

function randomMusicalLyrics(lyrics){
	console.log("Random Musical Theater Lyric:")
	console.log("%c" + lyrics[Math.floor(Math.random() * lyrics.length)], "color: black; font-size: 20px; font-weight: bold; text-transform: lowercase;")
}

randomMusicalLyrics(lyrics)


// Songs to find lyrics: Matilda (Quite), Natash Pierre (Pierre), Heathers (??), Hamilton, Dear Evan Hansen, Once In the Heights, American Idiot, Fun Home (Telephone Wire)

