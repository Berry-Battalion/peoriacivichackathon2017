//This is to load the json data into the map
//Returns Success or Failure

//loads arterial data
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


// loads pavement construction data
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

// loads pavement construction data
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

// loads pavement construction data
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

// loads pavement construction data
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
