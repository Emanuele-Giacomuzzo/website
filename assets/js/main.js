/*
    Modified main.js for enabling real scrolling
    --------------------------------------------
    Original HTML5 UP Astral uses a panel-switching system,
    which prevents scrolling to anchors (#research, #news, etc.).

    This version removes panel switching and restores real scrolling,
    while keeping animations + responsive behavior.
*/

(function($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints
    breakpoints({
        xlarge:   ['1281px',  '1680px'],
        large:    ['981px',   '1280px'],
        medium:   ['737px',   '980px' ],
        small:    ['481px',   '736px' ],
        xsmall:   [null,      '480px' ]
    });

    // Play nice with preload
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // REMOVE ASTRAL'S PANEL SYSTEM COMPLETELY
    // ----------------------------------------
    // The panel system is what blocks scrolling.
    // We disable everything related to "#main > section" switching.

    // Smooth scrolling for anchor links
    $(document).ready(function() {

        // Enable scrolly globally
        $('a[href^="#"]').scrolly({
            speed: 800,
            offset: 0
        });

        // Add an active class to nav items when clicking
        $('#nav a[href^="#"]').on('click', function() {
            $('#nav a').removeClass('active');
            $(this).addClass('active');
        });

    });

    // Keep Scrollex for fade-in effects
    $('#main > section')
        .scrollex({
            mode: 'middle',
            enter: function() {
                $(this).removeClass('inactive');
            },
            leave: function() {
                $(this).addClass('inactive');
            }
        });

    // Initially mark sections inactive for fade-in
    $window.on('load', function() {
        $('#main > section').addClass('inactive');
    });

})(jQuery);
