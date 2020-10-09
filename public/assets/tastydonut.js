$(document).ready(function() {
    //change donut to devoured
        
        $(".eatDonutBtn").on("submit", function(event) {
            event.preventDefault();
        console.log("noooo");
        var id = $(this).data("id");
    
        // $.ajax("/api/donuts/" + id, {
        //   type: "PUT",
        // //   data: data
        // }).then(
        //   function() {
            
        //     window.location = "/";
        //   }
        // );
      });
    
    
                // create new donut
        $("#newDonutBtn").on("click", function(event) {
            event.preventDefault();
            const text = $("textarea[name=donut]").val();
            console.log("MMM DONUTS");
    
            // $.ajax({
            //     method: "POST",
            //     url: "/submit",
            //     data: {
            //         task: text
            //     }
            // }).then(function(data) {
            //     console.log("SUBMITTED!!");
            //     window.location = "/";
            // });
        });
      
    
    
    })
