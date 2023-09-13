$(function () {
    $(window).on('scroll', function(){
        let sct = $(window).scrollTop();
        if(sct>0) { 
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $('.gnb ul>li>a').on('click', function (e) {
        e.preventDefault();
        if($(window).width() < 768) {
                $(this).next().stop().toggleClass('on');
                $(this).parent().siblings().find('.lnb').stop().removeClass('on');
            }
            
            else {
                $(this).next().stop().slideToggle();
                $(this).parent().siblings().find('.lnb').stop().slideUp();
            }
    });

    $('.g_slide').slick({
        arrows: false,
        fade: true,
        autoplay: false, 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    asNavFor: '.main_gameban .g_con'
                }
            }
        ]
    })

    $('.main_gameban .g_con .con').on('click', function () {
        var idx = $(this).index();
        $('.g_slide').slick('slickGoTo', idx)
    })

    
    $('.main_gameban .g_con').slick({
        arrows: false,
        slidesToShow: 6,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 1,
                asNavFor: '.g_slide'
              }
            },
          ]
    });
   
    $('.p_slide').slick({
        arrows: false,
        fade: true,
        draggable: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    asNavFor: '.p_bottom'
                }
            }
        ]
    })

    $('.main_product .p_bottom .btn').on('click', function () {
        var idx = $(this).index();
        $('.p_slide').slick('slickGoTo', idx)
    })

    $('.l_slide').slick({
        arrows: false,
        fade: true,
        draggable: false,
    })

    $('.main_launch .l_btn .left').on('click', function () {
        $('.l_slide').slick('slickPrev')
    })

    $('.main_launch .l_btn .right').on('click', function () {
        $('.l_slide').slick('slickNext')
    })

    $('.ln_slide').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '125px',
        slidesToShow: 3,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1,
              }
            },
          ]
    })

    $('.main_lanews .ln_btn .left').on('click', function () {
        $('.ln_slide').slick('slickPrev')
    })
    $('.main_lanews .ln_btn .right').on('click', function () {
        $('.ln_slide').slick('slickNext')
    });
  
    $('.p_bottom').slick({
        arrows: false,
        slidesToShow: 7,
        infinite: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 1,
                asNavFor: '.p_slide',
              }
            },
          ]
    });

    // $('.main_launch .new .game_box').slick({
    //     slidesToShow: 1,
    //     responsive: [
    //         {
    //             breakpoint: 768,

    //         }
    //     ]

    // })

    $('.m_btn').on('click', function () {
        $('.header .h_bottom .gnb').toggleClass('on');
    })
})