$(onReady);

function onReady() {
    $(".spanNav").mouseenter(function() {
        console.log('hello');
        $(this).toggleClass("spanNav");
    });

    $(".spanNav").mouseleave(function() {
        console.log('hello');
        $(this).toggleClass("spanNav");
    });

    $("#IntroLogo").mouseenter(function() {
        console.log('clicked');
        $(this).fadeOut('slow');
        $("#downArrow").fadeIn('slow');
    });

    $("#downArrow").mouseenter(function() {
        console.log('clicked');
        $(this).fadeOut('slow');
        $(this).fadeIn('slow');
    });

}

var scrollY = 0,
    distance = 40,
    speed = 10;

function autoScrollTo(el) {
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.inngeHeight;
    var animator = setTimeout('autoScrollTo(\'' + el +'\')', speed);

    if (yPos > bodyHeight) {
        clearTimeout(animator);
    } else {
        if (currentY < targetY-distance) {
            scrollY = currentY+distance;
            window.scroll(0, scrollY);
        } else {
            clearTimeout(animator);
        }
    }
}
