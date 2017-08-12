function loadData() {

}


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

