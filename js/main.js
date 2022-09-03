;(function ($) {
    "use strict";
    $(document).on('ready', function () {
        var mY = 0;
        $('body').mousemove(function(e) {
            // moving upward
            if (e.pageX < mY) {
                $('.primary-menu ul.nav li a').addClass('left-go');
                $('.primary-menu ul.nav li a').removeClass('right-go');
            // moving downward
            } else {
                $('.primary-menu ul.nav li a').addClass('right-go');
                $('.primary-menu ul.nav li a').removeClass('left-go');
            }
            // set new mY after doing test above
            mY = e.pageX;
        });
      
        /*--Primary-Menu-Dropdown-Plus-Icon--*/
        $('.primary-menu .sub-menu').parent('li').children('a').append('<i class="plus"></i>');

       /*-- Tigger-Mobile-Menu --*/
        $(".mainmenu-area .navi-trigger").on('click',function() {
            $(this).toggleClass("cross");
        });
        /*---------------------------
        MICHIMP INTEGRATION
        -----------------------------*/
        $('#mc-form').ajaxChimp({
            url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
            callback: function (resp) {
                if (resp.result === 'success') {
                    $('.subscrie-form input, .subscrie-form button').fadeOut();
                }
            }
        });
        /*-- Testimonail-Slider-Active --*/
        $('.featires').slick({
            dots: false,
            arrows: true,
            prevArrow: '<button class="slick-prev"  type="button"><i class="icofont-rounded-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="icofont-rounded-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.gallery-images').slick({
            dots: false,
            arrows: true,
            prevArrow: '<button class="slick-prev"  type="button"><i class="icofont-rounded-right"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="icofont-rounded-left"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.testimonial-images').slick({
            dots: false,
            arrows: true,
            prevArrow: '<button class="slick-prev"  type="button"><i class="icofont-rounded-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="icofont-rounded-right"></i></button>',
            centerMode: true,
            autoplay: true,
            vertical: false,
            verticalSwiping: false,
            asNavFor: '.testimonial-content',
            slidesToShow: 5,
            slidesToScroll: 1,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.blog-post-slider').slick({
            dots: false,
            arrows: true,
            prevArrow: '<button class="slick-prev"  type="button"><i class="icofont-rounded-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="icofont-rounded-right"></i></button>',
            centerMode: false,
            autoplay: true,
            vertical: false,
            verticalSwiping: false,
            asNavFor: '.testimonial-content',
            slidesToShow: 3,
            slidesToScroll: 1,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
         $('.testimonial-content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><i class="icofont-rounded-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="icofont-rounded-right"></i></button>',
            fade: false,
            asNavFor: '.testimonial-images'
        });

        $('.accordion-list').each(function(){
            $(this).find('.accoridon-item .title').on('click',function(){
                $(this).parent('.accoridon-item').siblings('.accoridon-item').find('.desc').slideUp();
                $(this).parent('.accoridon-item').siblings('.accoridon-item').find('.title').removeClass('active');
                $(this).siblings('.desc').slideToggle();
                $(this).toggleClass('active');
            });            
        });



        
        /*-- Button-Hover-Effect-Script --*/
        $( '.mouse-dir' ).append('<span class="dir-part"></span>');
        $( '.mouse-dir' ).on( 'mouseenter', function ( e ) {
            var parentOffset = $( this ).offset( ),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            if ( $( this ).find( '.mouse-dir .dir-part' ) ) {
                $( '.mouse-dir .dir-part' ).css( {
                    top: relY,
                    left: relX,
                } );
            }
        } );
        $( '.mouse-dir' ).on( 'mouseout', function ( e ) {
            var parentOffset = $( this ).offset( ),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            if ( $( this ).find( '.mouse-dir .dir-part' ) ) {
                $( '.mouse-dir .dir-part' ).css( {
                    top: relY,
                    left: relX,
                } );
            }
        } );

        /*-- Mobile-Menu-Active --*/
        $('.primary-menu').slicknav({
            label: '',
            duration: 500,
            prependTo: '',
            closedSymbol: '<i class="icofont-rounded-right"></i>',
            openedSymbol: '<i class="icofont-rounded-right"></i>',
            appendTo: '.mainmenu-area',
            menuButton: '.navi-trigger',
            closeOnClick: 'true' // Close menu when a link is clicked.
        });

        /*-- Click-Smoth-Scroll-Script --*/
        $('.mainmenu-area a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    });

    $(window).on("load", function () {
        /*-- Preloader-Fade-Out-After-Load-Window --*/
        $('.preloader').fadeOut(500);
        $('body').append('<a href="#" id="scrollUp"><i class="icofont-long-arrow-up"></i></a>');
        $('#scrollUp').on('click',function() {
            $('body,html').animate({
                scrollTop : 0
            }, 500);
            return false;
        });

        $('.navi-trigger').on('click',function(){
            $(this).toggleClass('active');
        });

        /*---------------------------
        MICHIMP INTEGRATION
        -----------------------------*/
        /*-- Mail-Chimp Integration--*/
        $('#mc-form').ajaxChimp({
            url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
            callback: function (resp) {
                if (resp.result === 'success') {
                    $('#mc-form input[type="EMAIL"], #mc-form button[type="submit"]').fadeOut();
                }
            }
        });
        
    });
    // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
            $('#scrollUp').addClass('active');    // Fade in the arrow
            $('.contact-form-popup .trigger-button').addClass('active');
        } else {
            $('#scrollUp').removeClass('active');   // Else fade out the arrow            
            $('.contact-form-popup .trigger-button').removeClass('active');
        }
    });

})(jQuery);