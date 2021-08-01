$(function(){

    //Aos(プラグイン)

    AOS.init({
        duration:2000,
    });


    //予約モーダル

    $(".js-modal-open").click(function(){
        $(".js-modal").fadeIn();
        return false;
    })

    $(".js-modal-close").click(function(){
        $(".js-modal").fadeOut();
        return false;
    })

    //予約モーダル（背景は固定）
    var scrollPosition;
    $(".js-modal-open").on("click",function(){
        scrollPosition =$(window).scrollTop();
        $("body").addClass("fixed").css({"top":-scrollPosition});
    });

    $(".js-modal-close").on("click",function(){
        $("body").removeClass("fixed").css({"top":0});
        window.scrollTo(0,scrollPosition);
    });

    

    //flatpickr（プラグイン）
    
    flatpickr('.flatpickr',{
        mode: "multiple",
        dateFormat: "Y-m-d",
        minDate: "today",
        mode: "range",
    });


    //ハンバーガーメニュー
    $(".burger-btn").on("click",function(){
        $(".header-nav").fadeToggle(300);
        $(".header-nav-bg").fadeToggle(300);
        $(this).toggleClass("cross");
        $("body").toggleClass("noscroll")    //スクロールを固定する
    });

    $(".header-nav-bg").on("click",function(){
        $(".header-nav").css("display","none");
        $(".header-nav-bg").css("display","none");
        $(this).toggleClass("cross");
    });
    



    
    //スティッキーヘッダー  
    var $win = $(window),
        $fv =$(".fv"),
        $header =$(".header"),
        fvHeight =$fv.outerHeight();　　//要素の高さを求める
        fixedClass = "fixed";

    $win.on("load scroll",function(){　　//ウィンドウが読み込まれた後、スクロールイベントが発生した時に実行する
        var value =$(this).scrollTop();
    
        if(value >fvHeight){
        $header.addClass(fixedClass);          
        }else{
        $header.removeClass(fixedClass);
        };

    });


    
    


    //お知らせタブ

    //$('.news-container li[class != "tab1"]').hide();

    $(".news-nav-list a").on("click",function(){
        $(".news-container li").hide();
        $($(this).attr("href")).show();

        $(".news-current").removeClass("news-current");
        $(this).addClass("news-current");

      return false;
    });

});
