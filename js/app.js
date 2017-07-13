(function() {

  $('.toggle-menu').jPushMenu();
  $('.hamburger').click(function() {
    $(this).toggleClass('is-active');
    $('body').toggleClass('overflow-hidden');
  });

  $(window).click(function() {
    if($('.hamburger').hasClass('is-active')) {
      $('.hamburger').removeClass('is-active');
      $('body').removeClass('overflow-hidden');
    }
  });


    $('.view-more, .category-btn').click(function() {
      $('.portfolio-projects__item').css({'opacity':'1','transform':'scale(1)'});
    });


    console.log("yes");

  var n = {
    origin: "bottom",
    viewFactor: .15,
    duration: 800,
    distance: "20px",
    scale: .8,
    reset: !0
  };
  // Changing the defaults
window.sr = ScrollReveal({ reset: true });
window.sr = new ScrollReveal(n), sr.reveal(".portfolio-projects__item");

// Customizing a reveal set
sr.reveal('.our-services__item', { duration: 1000 },250);
sr.reveal('.company-details', { duration: 1000 });
sr.reveal('.contact-form', { duration: 1000 });


	// Select all links with hashes // SMOOTH SCROLLING SCRIPT
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
  })
  
      $('.map__section')
	.click(function(){
			$(this).find('#google-map').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('#google-map').removeClass('clicked')});

      $('.category-btn').click(function() {
        $('.category-btn').removeClass('active');
        $(this).addClass('active');
        
        $('.portfolio-projects__wrapper').hide();
        var elementOpen = $(this).text();
        $("#" + elementOpen + "-photos").fadeToggle(1000);
      });

      $('#all-category-btn , .view-more').click(function() {
        $('.portfolio-projects__wrapper').fadeIn(1000);
        $('.portfolio-projects__wrapper').addClass('active');
      });

})();


  /* Gallery lightbox */
		
	$(function() {
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
      
	});