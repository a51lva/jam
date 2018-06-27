$(document).ready(function () {
	 var audio = document.getElementById("myaudio");
	audio.volume = 0.01;
    "use strict";
    //smoothscroll
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
        }, 500, function() {
			//window.location.hash = target;
            //$(document).on("scroll", onScroll);
        });
      }
    }
  });
	
	$('.portfolio a').nivoLightbox({
		effect: 'fadeScale'
	});
	//$('.parallax-window').parallax({imageSrc: 'images/home.jpg'});
	
    /*---------------------------------------------*
     * STICKY TRANSPARENT NAVIGATION 
     ---------------------------------------------*/


    var windowWidth = $(window).width();

    if (windowWidth > 767) {
        $(".navbar-1").addClass('custom-nav');
// fade in .sticky_navigation
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.navbar-1').addClass('scroll-nav animated fadeIn');
                $('.navbar-1').removeClass('custom-nav');
            } else {
                $('.navbar-1').addClass('custom-nav');
                $('.navbar-1').removeClass('scroll-nav animated fadeIn');
            }
        });
    }


    /*---------------------------------------------*
     * STICKY HIDE NAVIGATION 
     ---------------------------------------------*/

    var windowWidth = $(window).width();
    if (windowWidth > 767) {
// hide .sticky_navigation first
        $(".hide-nav").hide();
// fade in .sticky_navigation
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.hide-nav').fadeIn(1000);
            } else {
                $('.hide-nav').fadeOut(1000);
            }
        });

    }


    /* ------------------------------------------------=
     ---=  ACCORDIAN                 ------
     ---------------------------------------------------= */

    function toggleChevron(e) {
        $(e.target)
                .prev('.panel-heading')
                .find("i.indicator")
                .toggleClass('glyphicon-plus-sign glyphicon-minus-sign');
    }
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);
    $('#accordion2').on('hidden.bs.collapse', toggleChevron);
    $('#accordion2').on('shown.bs.collapse', toggleChevron);



    /* ------------------------------------------------=
     ---=  FITVIDS              ------
     ---------------------------------------------------= */


    // Target your .container, .wrapper, .post, etc.
    //$('.describe-video').fitVids();

});

$(function() {
  function loadAudio() {
    // Setup the player to autoplay the next track
    var a = audiojs.createAll({
      trackEnded: function() {
        var next = $('ol.playlist li.playing').next();
        if (!next.length) next = $('ol.playlist li').first();
        next.addClass('playing').siblings().removeClass('playing');
        audio.load($('a', next).attr('data-src'));
        audio.play();
      }
    });

    // Load in the first track
    var audio = a[0];
    first = $('ol.playlist a').attr('data-src');
    $('ol.playlist li').first().addClass('playing');
    audio.load(first);

    // Load in a track on click
    $('ol.playlist li').click(function(e) {
      e.preventDefault();
      $(this).addClass('playing').siblings().removeClass('playing');
      audio.load($('a', this).attr('data-src'));
      audio.play();
    });

    $('.nextprev .next').click(function(e) {
      e.preventDefault();
      var next = $('ol.playlist li.playing').next();
      if (!next.length) next = $('ol.playlist li').first();
      next.click();
    });
    $('.nextprev .prev').click(function(e) {
      var prev = $('ol.playlist li.playing').prev();
      if (!prev.length) prev = $('ol.playlist li').last();
      prev.click();
    });

    $('.btnloop').click(function(e) {
      if ($('audio').attr('loop')) {
        $('audio').removeAttr('loop');
        $(this).removeClass('active');
      } else {
        $('audio').attr('loop', 0);
        $(this).addClass('active');
      }
    });

    // /// Keyboard shortcuts
    // $(document).keydown(function(e) {
    //   var unicode = e.charCode ? e.charCode : e.keyCode;
    //      // right arrow
    //   if (unicode == 39) {
    //     var next = $('li.playing').next();
    //     if (!next.length) next = $('ol li').first();
    //     next.click();
    //     // back arrow
    //   } else if (unicode == 37) {
    //     var prev = $('li.playing').prev();
    //     if (!prev.length) prev = $('ol li').last();
    //     prev.click();
    //     // spacebar
    //   } else if (unicode == 32) {
    //     audio.playPause();
    //   }
    // })
  }

  if ($('.player').length>0 ) {
    loadAudio();
  };

});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbar-collapse a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbar-collapse ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}




