$(function(){
  // sticky nav
     var waypoints =$('#features').waypoint({
      handler: function(direction) {
          if(direction=='down'){
              $('nav').addClass('sticky');
          }else{
              $('nav').removeClass('sticky');

          }
      },
        offset: '60px'

    });


    
    /* ------- smooth scroll ---------*/
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



  
    //cool effect
    $('.js2').waypoint({
      handler: function(direction) {
          $(".js2").addClass('animated fadeInUp');
      },
        offset:'55%'
    });
    $('.js3').waypoint({
      handler: function(direction) {
          $(".js3").addClass('animated flash');
      },
        offset:'55%'
    });
    
    
    /*--- mobile nav -----*/
    $(".mobile-icon").click(function(){
       var nav= $(".main-nav");
       var icon= $(".mobile-icon i");
        nav.slideToggle(200);
        if(icon.hasClass('ion-md-menu')){
            icon.removeClass('ion-md-menu').addClass('ion-md-close');
         
        }else{
            icon.removeClass('ion-md-close').addClass('ion-md-menu');
            
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    });