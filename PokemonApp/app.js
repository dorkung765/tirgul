$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    const input = $('#pokemon-input').val()
    const typeInput = $('#type-input').val()

    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${input}`,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        // Update the HTML on the page with the retrieved data
        $('#name').text(data.name);
        $('#image').attr('src', data.sprites.front_default);
        $('#height').text(data.height);
        $('#weight').text(data.weight);

        // Make a second AJAX request to get a list of moves for the Pokemon
        const moveUrls = data.moves.map(move => move.move.url);
        Promise.all(moveUrls.map(url => $.ajax({url, method: 'GET', dataType: 'json'})))
          .then(movesData => {
            // Display the moves on the page in a table
            const moves = movesData.map(moveData => ({
              name: moveData.name,
              type: moveData.type.name,
              power: moveData.power,
              pp: moveData.pp,
              accuracy: moveData.accuracy
            }));
            const tableRows = moves.map(move => {
              return `<tr><td>${move.name}</td><td>${move.type}</td><td>${move.power}</td><td>${move.pp}</td><td>${move.accuracy}</td></tr>`;
            });
            const tableHtml = `<table><thead><tr><th>Name</th><th>Type</th><th>Power</th><th>PP</th><th>Accuracy</th></tr></thead><tbody>${tableRows.join('')}</tbody></table>`;
            $('#moves').html(tableHtml);
          })
          .catch(() => {
            $('#moves').html('No moves found');
          });
      },
      error: function() {
        alert('Error fetching pokemon data.');
      }
    });

    // Make a third AJAX request to the PokeAPI to get a list of Pokemon of the given type
    $.ajax({
      url: `https://pokeapi.co/api/v2/type/${typeInput}`,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        // Display the Pokemon of the given type on the page
        if (data.moves) {
          const pokemonList = data.pokemon.map(pokemon => pokemon.pokemon.name);
          const pokemonHtml = pokemonList.map(pokemon => `<div>${pokemon}</div>`).join('');
          $('#pokemon-grid').html(pokemonHtml);
        } else {
          $('#pokemon-grid').html('No pokemon found');
        }
      },
      error: function() {
        alert('Error fetching Pokemon type data.');
      }
    });

    // Hide the moves table when a new search is made for a Pokemon type
    $('#pokemon-input').on('focus', function() {
      $('#moves').hide();
    });

    // Show the moves table again when a new search is made for a Pokemon
    $('#type-input').on('focus', function() {
      $('#moves').show();
    });
  });
});
