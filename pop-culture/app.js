var marvelSettings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/list/126746?language=en-US&api_key=96572a5fbc09a60b79e673e015625fac",
    "method": "GET",
    "headers": {},
    "data": "{}"
}

var starWarsSettings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/list/126751?language=en-US&api_key=96572a5fbc09a60b79e673e015625fac",
    "method": "GET",
    "headers": {},
    "data": "{}"
}

var disneySettings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/list/126751?language=en-US&api_key=96572a5fbc09a60b79e673e015625fac",
    "method": "GET",
    "headers": {},
    "data": "{}"
}



$.when(
    $.ajax(marvelSettings), 
    $.ajax(starWarsSettings), 
    $.ajax(disneySettings))
    .then(function (marvelResponse, starWarsResponse, disneyResponse ) {
        // console.log(marvelResponse[0].items);
        // console.log(starWarsResponse[0].items);
        // console.log(disneyResponse[0].items);
        let movieCard = '';
        for (var i = 0; i < marvelResponse[0].items.length; i++) {
           
        let title = '';
            if (marvelResponse[0].items[i].media_type == "tv"){
                title = marvelResponse[0].items[i].name
        } else {
                title = marvelResponse[0].items[i].title
        }
        // let releaseDate = marvelResponse[0].items[i].release_date;
        // releaseDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
        movieCard += '<div class="movie-card">' + title + '</div>';
    }
    $('#marvel-movies').append(movieCard);

});