~function () {
    var $slide = $("#slide"),
        $bannerBox = $("#bannerBox"),
        $pre = $(".pre"),
        $next = $(".next"),
        $oLis = $("#pageNum li");



    //鼠标悬停
    $bannerBox.on("mouseover", function () {
        window.clearInterval(autoTimer);
    });
    $bannerBox.on("mouseout", function () {
        autoTimer = window.setInterval(move, interval);
    });
    //绑定点击事件
    $next.on("click",move);
    $pre.on("click",move);


    //自动轮播
    var interval = 3000, oLeft = parseInt($bannerBox.css("margin-left"));
    autoTimer = window.setInterval(move, interval);

    function move() {
        if (oLeft <= -2400) {
            $bannerBox.css("margin-left", -480);
            oLeft = parseInt($bannerBox.css("margin-left"));
        }
        if (oLeft == -480) {
            $slide.addClass("slideBg2");
            $slide.animate({opacity:1}, 200);
            imgIndex = 1;
        } else {
            $slide.removeClass("slideBg2");
            $slide.addClass("slideBg1");
            $slide.animate({opacity:1}, 200);
            imgIndex = 0;
        }
        $bannerBox.animate({marginLeft: oLeft += -960}, 200);
        var curLi = $oLis.eq(imgIndex);
        curLi.addClass("bg").siblings().removeClass("bg");
    }
}();