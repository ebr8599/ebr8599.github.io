
function setupAutoHide() {
    const auto_hide = $('.autohide');

    const nav_height = $('.navbar').outerHeight();
    $('body').css('paddingTop', nav_height + 'px');

    if (auto_hide) {
        var last_scroll_top = 0;

        $(window).scroll(function() {
            let scroll_top = window.scrollY;

            if (scroll_top < last_scroll_top) {
                auto_hide.removeClass('scrolled-down');
                auto_hide.addClass('scrolled-up');
            }
            else {
                auto_hide.addClass('scrolled-down');
                auto_hide.removeClass('scrolled-up');
            }

            last_scroll_top = scroll_top;
        });
    }
}

function setupLinkScroll() {
    function scrollToAnchor(anchor_id) {
        const aTag = $("a[name='"+ anchor_id +"']");

        $('html, body').animate({ scrollTop: aTag.offset().top }, 'slow');
    }

    const anchor_links = $('.link-scroll');

    anchor_links.click(function() {
        scrollToAnchor(anchor_links.attr('href').slice(1));
    });
}

function setupNav() {
    $('#nav').html(`
    <nav class='autohide navbar fixed-top navbar-dark bg-dark'>
        <a class="navbar-brand" href="index.html">Ambisonic Audio</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link link-scroll" href="jazz.html">Jazz Combo</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link link-scroll" href="speaking.html">Directional Speaking</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link link-scroll" href="percussion.html">Percussion</a>
                </li>
            </ul>
        </div>
    </nav>`);
}

$(function() {
    setupNav();

    setupAutoHide();

    setupLinkScroll();
});

