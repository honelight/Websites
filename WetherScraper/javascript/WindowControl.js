$("#wrapper").css("min-height", $(window).height())

$("#weatherPanel").submit(function (e) {
    //console.log("here");
    e.preventDefault();
    if ($("#searchBox").val() == "") {
        $("#weatherReport").css("display", "none");
        $("#emptyMessage").css("display", "block");
    }
    else {
        $("#emptyMessage").css("display", "none");
        $.get("./php/Scrapper.php?city=" + $("#searchBox").val(), function (data) {
            $("#weatherReport").html(data);
            $("#weatherReport").css("display", "block");
        });
    }
});