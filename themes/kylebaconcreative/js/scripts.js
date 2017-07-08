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
    
//    Collapse Function
//    $('.js-collapse-menu').on('click', function(){
//        $('.docked-nav').add
//    });
    
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
    
    //Filtering Desktop
    $('.js-filter-item').on('click', function(){
        var categoryType = $(this).data('category');
        $('.js-filter-item').removeClass('active');
        $(this, '.js-filter-item').addClass('active');
        $('.work-image-box').fadeOut('slow');
        $('.' + categoryType).fadeIn('slow');
    });
    
    //Filtering Mobile
    $('.js-mobile-filter-item').on('click', function(){
        var categoryType = $(this).data('category');
        $('.js-mobile-filter-toggle').removeClass('active-mobile');
        $('.js-mobile-filter-toggle', this).addClass('active-mobile');
        $('.work-image-box').fadeOut('slow');
        $('.' + categoryType).fadeIn('slow');
        
        //Collapses menu after work category is chosen
        $('.js-menu').toggleClass('open');
        $('.js-nav-list').slideToggle('hidden');
        $('.js-mobile-filter-widget').slideToggle('hidden');
    }); 
    
    
    //Nesting Anchor Tag Fix
    $("a").each(function(){
      var aTag = this;
      $(aTag).closest('.work-image-box').click(function(){
          window.location.href = $(aTag).attr('href');
      });
    });
});