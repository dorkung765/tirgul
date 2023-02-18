$(document).ready(function() {
$('#btn-search').on('click' , function() {
    const userSearch = $('#movie-search').val(); 
    console.log('user search:' + userSearch);

    $.ajax({
        url: `http://www.omdbapi.com/?s=${userSearch}&apikey=92926f2d`,
        
        success: function(data) {
            console.log(data)
            for ( let movie of data.Search) {
                $.ajax({
                    url : `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=92926f2d`,
                    success: function(data) {
                        console.log(data)
                        $('#info').append(
                            `<div class="movie-info">
                                <p id="title">Movie Name: ${data.Title}</p> 
                                <p id="year">Release Date: ${data.Year}</p> 
                                <p id="genre">Genre: ${data.Genre}</p> 
                                <p id="actors">Actors: ${data.Actors}</p>
                                <img id="poster" src=${data.Poster} </img>
                            </div>`
                        )
                    }
                })
            }
        }
    })
})
})