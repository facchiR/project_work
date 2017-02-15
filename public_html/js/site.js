$(document).ready(function () {
    $("#flip0").click(function () {
        $("#panelN0").slideToggle("normal");
    });
    $("#flip1").click(function () {
        $("#panelN1").slideToggle("normal");
    });
    $("#flip2").click(function () {
        $("#panelN2").slideToggle("normal");
    });

    // Add smooth scrolling on all links inside the navbar
    $("#myScrollspy a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });




});


    