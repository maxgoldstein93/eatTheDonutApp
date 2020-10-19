$(document).ready(function () {
    
        $(".eatDonutBtn").on("click", function (event) {
            console.log(" mm DONUTS")
            event.preventDefault()
            var yumid = $(this).data("id")
            console.log(yumid)

            $.ajax("/api/donuts/" + yumid, {
                type: "PUT",
            }).then(
                function () {
                    console.log("DEVOUR DONUT")
                    location.reload();
                }
            );
        });

    $(".create-form").on("submit", function (event) {
        
        console.log("adding DONUTS")
        event.preventDefault()
        var newDonut = {
            donut_name: $("#newDonut").val().trim(),
        };
        console.log(newDonut)
        $.ajax("/api/donuts", {
            type: "POST",
            data: newDonut
        }).then(
            function () {
                console.log("created new Donut");
                location.reload();
            }
        );
    });
});