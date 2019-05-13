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

$(document).ready(function(){
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
		  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
			  $('html, body').animate({
				scrollTop: target.offset().top
			  }, 1000);
			  target.focus(); 
			  if (target.is(":focus")){ 
				return false;
			  } else {
				target.attr('tabindex','-1'); 
				target.focus(); 
			  };
			  return false;
			}
		  }
		});
	  });
  });
