//This is to load the json data into the map
//Returns Success or Failure

var arterial = (function() {
    $.ajax({
        async: true,
        url: "data/arterial",
        dataType: "json",
        success: function(result) {
            arterial = result;
        }
    });
}());
<<<<<<< HEAD
=======



var pavement2014 = (function() {
    $.ajax({
        async: true,
        url: "data/pavement/2014",
        dataType: "json",
        success: function(result) {
            pavement2014 = result;
        }
    });
}());

var pavement2015 = (function() {
    $.ajax({
        async: true,
        url: "data/pavement/2015",
        dataType: "json",
        success: function(result) {
            pavement2015 = result;
        }
    });
}());

var pavement2016 = (function() {
    $.ajax({
        async: true,
        url: "data/pavement/2016",
        dataType: "json",
        success: function(result) {
            pavement2016 = result;
        }
    });
}());

var pavement2017 = (function() {
    $.ajax({
        async: true,
        url: "data/pavement/2017",
        dataType: "json",
        success: function(result) {
            pavement2017 = result;
        }
    });
}());
>>>>>>> 6ba00c4dd7b2970967d71338c8c0b3b820212218
