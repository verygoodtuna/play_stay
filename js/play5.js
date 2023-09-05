$(function () {
    $('.header .gnb .game').on('click', function (){
        $('.header .lnb_box .game').toggleClass('on')
    })

    $('.header .gnb .hard').on('click', function (){
        $('.header .lnb_box .hard').toggleClass('on')
    })

    $('.header .gnb .service').on('click', function (){
        $('.header .lnb_box .service').toggleClass('on')
    })

    $('.header .gnb .news').on('click', function (){
        $('.header .lnb_box .news').toggleClass('on')
    })

    $('.header .gnb .buy').on('click', function (){
        $('.header .lnb_box .buy').toggleClass('on')
    })

    $('.header .gnb .cus').on('click', function (){
        $('.header .lnb_box .cus').toggleClass('on')
    })

    $('.g_slide').slick({
        arrows: false,
        fade: true,
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
                centerPadding: '40px',
                slidesToShow: 1,
              }
            },
          ]
    });
   
    $('.p_slide').slick({
        arrows: false,
        fade: true,
        draggable: false,
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
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 1,
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
        $('.header .h_bottom nav').toggleClass('on');
    })
})