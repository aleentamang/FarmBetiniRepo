

$(document).ready(function() {

    
    /* ======= Fixed header when scrolled ======= */
      $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
          
             $('.header-top-fix').addClass('hide-on-scroll-down');
            
         }
         else {
          
                  $('.header-top-fix').removeClass('hide-on-scroll-down');
         }
    });
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 64) {
             $('#header').addClass('header-scrolled');
          
             
         }
         else {
             $('#header').removeClass('header-scrolled');
               
         }
    });
    
   $('[data-toggle="slide-collapse"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({'width':'toggle'}, 350);
});



 $("ul#ticker01").liScroll();

  // $('ul.nav li.dropdown').hover(function() {
  //       $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
  //   }, function() {
  //       $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
  //   });

    





});


$(".header-slide").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      loop:true,
     
 
      // "singleItem:true" is a shortcut for:
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false,
       autoplay:true,
    nav:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false
 
  });


$(document).ready(function() {
//gallery

    $('#aniimated-thumbnials').lightGallery({
        thumbnail: true,
        selector: 'a'
    });
});


//Bootstrap datepicker plugin


 
 $(function () {
    //Textarea auto growth
    autosize($('textarea.auto-growth'));

   
    $('#bs_datepicker_container input').datepicker({
        autoclose: true,
        container: '#bs_datepicker_container'
    });

    $('#bs_datepicker_component_container').datepicker({
        autoclose: true,
        container: '#bs_datepicker_component_container'
    });
    //
    $('#bs_datepicker_range_container').datepicker({
        autoclose: true,
        container: '#bs_datepicker_range_container'
    });


    $('select').selectpicker();




$('.datepicker').datepicker();
});





$( '#header .navbar-nav a' ).on( 'click', function () {
  $( '#header .navbar-nav ' ).find( 'li.active' ).removeClass( 'active' );
  $( this ).parent( 'li' ).addClass( 'active' );
});