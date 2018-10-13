function isMobile() {
    var mq = window.matchMedia("(max-width: 767px)");
    return (typeof mq != 'undefined' && mq.matches);
}


function activateScrollToTop(){
    if(isMobile() && window.pageYOffset > 400) {
        $('#scrollTop').show(500);
    } else {
        $('#scrollTop').hide(500);
    }
}

function setStaticNavbar() {
    var nav = $('.navbar');
    if (nav.hasClass('navbar-static-top')) {
        return;
    }
    if (nav.hasClass('navbar-fixed-top')) {
        nav.removeClass('navbar-fixed-top');
    }
    if (!nav.hasClass('navbar-static-top')) {
        nav.animate({visibility: "hidden", opacity: 0}, 0);
        nav.addClass('navbar-static-top');
        nav.animate({visibility: "visible", opacity: 1.0}, 500);
    }
}

function setFixedNavbar() {
    var nav = $('.navbar');
    if (nav.hasClass('navbar-fixed-top')) {
        return;
    }
    if (nav.hasClass('navbar-static-top')) {
        nav.removeClass('navbar-static-top');
    }
    if (!nav.hasClass('navbar-fixed-top')) {
        //nav.hide(0);
        nav.animate({visibility: "hidden", opacity: 0}, 0);
        nav.addClass('navbar-fixed-top');
        //nav.show(200);
        nav.animate({visibility: "visible", opacity: 1.0}, 500);
    }
}

var scrollPosition = 0;
var scrollTimerNav, lastScrollFireTimeNav = 0;

function activateAutoShowNavbarOnScrollUp() {
    if (isMobile() && window.pageYOffset > 150) {
        var currentScrollPositionNav = $(this).scrollTop();
        if (currentScrollPositionNav > scrollPosition) {
            //scroll down (default navbar)
            setStaticNavbar();

        } else {
            //scroll up (position fixed navbar)
            setFixedNavbar();
        }
        scrollPosition = currentScrollPositionNav;

    } else {
        setStaticNavbar();
    }
}
