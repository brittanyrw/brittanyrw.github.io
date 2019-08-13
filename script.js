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

const colorScheme = ["purple","pink","green","blue","yellow"];

$(document).ready(function(){

	randomMusicalLyrics(lyrics);
	
      let lastColor = 5;
      var randomColor = function(colors) {
        var getRandomColor = Math.floor(Math.random() * colors.length);
		console.log('random color:' + getRandomColor);
        if (getRandomColor != lastColor) {
          var random = colorScheme[getRandomColor];
          document.getElementById("body").className = random;
          lastColor = getRandomColor;
		  console.log("last color:" + lastColor);
        } else {
          randomColor(colors);
        }
      };

	  randomColor(colorScheme);

	$("#color-scheme").on("click", function() {
      randomColor(colorScheme);
    });

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
