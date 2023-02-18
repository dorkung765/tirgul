$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const champInput = $('#champion-input').val();

        $.ajax ({
            url: `http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion.json`,
            method:'GET',
            success: function(data) {
                console.log(data)
                // lowercaseData[key.toLowerCase()] = data.data[key]; creates a new property on lowercaseData using the lowercase version of the champion name as the key, and assigns the champion's data to that property.
                const lowercaseData = {};

                for(const key in data.data) { // Key = variable that holds the name of the champion in the League of Legend DataBase
                    lowercaseData[key.toLowerCase()] = data.data[key]; 
                }
                
                const championData = lowercaseData[champInput.toLowerCase()];
                const championStats = championData.stats;
                $('#name').text(championData.name);
                $('#title').text(championData.title);
                $('#key').text(championData.key);
                $('#hp').text(championStats.hp);
                $('#hpp').text(championStats.hpperlevel);
                $('#mp').text(championStats.mp);
                $('#mpp').text(championStats.mpperlevel);
                $('#ms').text(championStats.movespeed);
                $('#armor').text(championStats.armor);
                $('#mr').text(championStats.spellblock);
                const splashArt = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championData.id}_0.jpg`
                $('#champion-image').attr('src', splashArt);
                
                
                
                }
                
            })
        });
    });


