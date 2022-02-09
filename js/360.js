$(document).ready(function(){
    // 윈도우에 load, resize 이벤트 설정
    $(window).on('load resize',function(){
        // 윈도우의 가로길이를 bodyW 변수에 저장
        var bodyW=$(this).width();
        // 태블릿, 모바일 버전에서 (만약 윈도우 가로길이가 1220보다 작으면 세로 아코디언 메뉴)
        if(bodyW <= 1199){
            $('.acc_item').removeClass('active');
            $('.sitemap .site_logo img').attr('src','img/logo_all_b.png');
            $('.site_close a img').attr('src','img/close_black.png');
            // sitemap의 세로 아코디언 메뉴
            $('.site_nav > ul > li > a').click(function(){
                if($(this).attr('class') != 'active'){
                    $('.site_nav .sub').stop().slideUp();
                    $('.site_nav ul> li > a').removeClass('active');
                    $(this).next().stop().slideDown();
                    $(this).addClass('active')
                }else{
                    $(this).removeClass('active');
                    $(this).next().stop().slideUp();
                }
            });


        // PC버전에서
        }else{
            // 주메뉴에 마우스 오버 이벤트 설정
            $('header').hover(function(){
                // 서브메뉴 내려옴
                $('header nav .sub').stop().slideDown(300);
                // 서브메뉴 배경 내려옴
                $('.sub_bg').stop().slideDown(300);
                $('.header_wrap').addClass('active');
            },function(){
                // 서브메뉴 올라감
                $('header nav .sub').stop().slideUp(300);
                // 배경도
                $('.sub_bg').stop().slideUp(300);
                $('.header_wrap').removeClass('active');
            });
            // 아코디언갤러리 s4
            $('.acc_item').click(function(){
                $('.acc_item').removeClass('active');
                $(this).addClass('active');
            });
            $('.sitemap .site_logo img').attr('src','img/logo_all_w.png');
            $('.site_close a img').attr('src','img/close.png');


        }
        
    });  //load resize 이벤트

    // 화면이 스크롤 되어서 첫번째 section이 지나가면  header에 active 설정
    $(window).scroll(function(){
        // top에 스크롤 값 저장
        var top=$(this).scrollTop();
        // top가 0보다 크면(스크롤 내리면) 하얀색 .active 불러옴
        if(top > 0){
            $('header').addClass('active');
        // top가 0보다 작으면(스크롤 내리면) 하얀색 .active 지움
        }else{
            $('header').removeClass('active');
        }
        // 각 section 안의 객체들 애니메이션
        // 각 section 영역의 위족 위치값을 구해서 각 변수에 저장
        var sTop1=$('section.s1').offset().top-600;
        var sTop2=$('section.s2').offset().top-600;
        var sTop3=$('section.s3').offset().top-600;
        var sTop4=$('section.s4').offset().top-600;
        var sTop5=$('section.s5').offset().top-600;
        var sTop6=$('section.s6').offset().top-600;
        // 만약 각 section의 위쪽 위치값이 window의 scrollTop값보다 작으면
        //&&('그리고' 라는 뜻의 논리 연산자, 조건 2개 모두 true일 때 실행)
        if(sTop1 < top && top < sTop2){
            $('.company_txt').addClass('active');
            $('.company_img').addClass('active');

        }
        if(sTop2 < top && top < sTop3){
            $('.s2 .fade_animation').addClass('active');
            $('.s2 .up_animation').addClass('active');
        }
        if(sTop3 < top && top < sTop4){
            $('.s3 .fade_animation').addClass('active');
            $('.s3 .s3_ani1').addClass('active');
            $('.s3 .s3_ani2').addClass('active');
            $('.s3 .s3_ani3').addClass('active');
            $('.s3 .s3_ani4').addClass('active');
        }
        if(sTop4 < top && top < sTop5){
            $('.s4 .up_animation').addClass('active');
        }
        if(sTop5 < top && top < sTop6){
            $('.s5 .up_animation').addClass('active');
            $('.s5 .up_delay').addClass('active');
        }
        if(sTop6 < top){
            $('.s6 .up_animation').addClass('active');
        }

        
    });

    $('header').hover(function(){
        $('.header_wrap').addClass('active');
    }, function(){
        $('.header_wrap').removeClass('active');
    });

    // main swiper slide
    var swiper = new Swiper(".mySwiper", {
        effect:'fade',
        loop:'true',
        centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    //   play/stop
    $('section.visual .swiper-pagination').append('<span class="swiper-play-stop"></span>');

    var sw=0;
    $('.swiper-play-stop').click(function(){
        if(sw==0){
            sw=1;
            swiper.autoplay.stop();
            $(this).css('background-image','url(img/play.png')
        }else{
            sw=0;
            swiper.autoplay.start();
            $(this).css('background-image','url(img/pause.png');
        }
    });
    
    // contents
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop:true,
        pagination: {
            el: "section.s2 .swiper-pagination",
            clickable: true,
          },
        breakpoints:{
            '1201':{
                slidesPerView:4 //1280px 이상
            },
            '480':{             //480~1279px 사이
                slidesPerView:3,
                
            },
            '0':{
                slidesPerView:1.5,
            }
        }
    });


    // family .fa_btn에 클릭 이벤트 설정
    var on=0;
    $('.family .fa_btn').click(function(){
        if(on==0){
            on=1;
            $('.family').addClass('active');
        }else{
            on=0;
            $('.family').removeClass('active');
        }
        return false;
    }); 
    // top 버튼
    $('.top').click(function(){
        $('html, body').animate({'scrollTop':0})
    });

    // 메뉴 버튼 클릭하면 사이트맵 나타남
    $('.menu').click(function(){
        $('.sitemap').addClass('active');
        return false;
    });
    // 닫기 버튼 클릭하면 사이트맵 사라짐
    $('.site_close').click(function(){
        $('.sitemap').removeClass('active');
        return false;
    });
});