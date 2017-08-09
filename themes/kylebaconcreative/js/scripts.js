$(document).on('ready', function(){

    //Menu
    $('.js-menu-activate').on('click', function(){
        $('.js-menu').toggleClass('open');
        $('.js-nav-list').slideToggle('hidden');
        $('.js-footer').toggleClass('fadeIn');
    });

    //Mobile Menu with filter widget
    $('.js-menu-activate').on('click', function(){
        $('.js-mobile-filter-widget').slideToggle('hidden');
        $('.js-footer').toggleClass('hidden');
    });
    
    //Smooth Scroll
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
            }
        }
        });
    });
});
