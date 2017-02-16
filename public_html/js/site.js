$(document).ready(function () {

    //    $("#flip0").click(function () {
    //        $("#panelN0").slideToggle("normal");
    //    });
    //    $("#flip1").click(function () {
    //        $("#panelN1").slideToggle("normal");
    //    });
    //    $("#flip2").click(function () {
    //        $("#panelN2").slideToggle("normal");
    //    });
    //    $("#flip3").click(function () {
    //        $("#panelN3").slideToggle("normal");
    //    });

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
            }, 1100, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
    // $('#accordion .btn-md[data-toggle="collapse"]').on('click', function () {

    console.log("ROZ0");
    $('#pin0[data-toggle="collapse"]').on('click', function (e) {
        if ($("#panelN0").hasClass('collapse in')) {
            //console.log("panel 0 collapse in");
            //console.log("pin 0 click");
            $('.panel-collapse #panelN0').addClass('in');
            e.stopPropagation();
            //console.log("STOP0");
        }
    });

    $('#pin1[data-toggle="collapse"]').on('click', function (e) {
        if ($("#panelN1").hasClass('collapse in')) {
            //console.log("panel 1 collapse in");
            //console.log("pin 1 click");
            $('.panel-collapse #panelN1').addClass('in');
            e.stopPropagation();
            //console.log("STOP1");
        }
    });

    $('#pin2[data-toggle="collapse"]').on('click', function (e) {
        if ($("#panelN2").hasClass('collapse in')) {
            //console.log("panel 2 collapse in");
            //console.log("pin 2 click");
            $('.panel-collapse #panelN2').addClass('in');
            e.stopPropagation();
            //console.log("STOP2");
        }
    });

    $('#pin3[data-toggle="collapse"]').on('click', function (e) {
        if ($("#panelN3").hasClass('collapse in')) {
            //console.log("panel 3 collapse in");
            //console.log("pin 3 click");
            $('.panel-collapse #panelN3').addClass('in');
            e.stopPropagation();
            //console.log("STOP3");
        }
    });


    console.log("ROZ5");
    //return;

});



//});


