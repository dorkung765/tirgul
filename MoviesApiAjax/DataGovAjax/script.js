$(document).ready(function() {
    $('#btn-search').click(function() {
    let carNumber = $('#search-input').val();
    let apiUrl = 'https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=' + carNumber;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
        let records = data.result.records;
        if (records.length > 0) {
            let carInfo = records[0];
            $('#carNumber').text('Car Number: ' + carInfo.mispar_rechev);
            $('#carName').text('Car Name: ' + carInfo.tozeret_nm);
            $('#carYear').text('Car Year: ' + carInfo.shnat_yitzur);
            $('#Model').text('Model :' + carInfo.kinuy_mishari);
            $('#ogOwnership').text('OwnerShip : ' + carInfo.baalut);
            $('#car-info').show();
        } else {
            alert('No car found with the entered number.');
        }
        },
        error: function(error) {
        alert('Error fetching data: ' + error);
        }
    });
    });
});
