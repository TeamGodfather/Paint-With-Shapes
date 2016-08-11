$(function () {

    var $myBackground = $("#myBackground");

    //Show URL input 
    $("#set-background").on("click", function () {

        if ($myBackground.hasClass("showMe")) {
            $myBackground.removeClass("showMe");
        } else {
            $myBackground.addClass("showMe");
        }
    });

    //Get URL
    var $save = $("#set"),
        $backgroundVal = $("#tb-backround-url");

    $save.on("click", function () {
        var text = $backgroundVal.val();
        backgroundImageURL = text;
        loadBackgroundImage(backgroundImageURL);
        $backgroundVal.val("");

        if ($myBackground.hasClass("showMe")) {
            $myBackground.removeClass("showMe");
        }
    });

    //Cancle button
    var $cancle = $("#cancle");

    $cancle.on("click", function () {
        $backgroundVal.val("");
        if ($myBackground.hasClass("showMe")) {
            $myBackground.removeClass("showMe");
        }
    });
});