//This is to load the json data into the map
//Returns Success or Failure

var arterial = (function() {
    $.ajax({
        async: true,
        url: "data/arterial",
        dataType: "json",
        success: function(result) {
            console.log(result)
            arterial = result;
        }
    });
}());
