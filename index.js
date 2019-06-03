$(document).ready(function(){

    var $svgCircle = $('#Layer_3');
    TweenMax.from($svgCircle, 4, {rotation:360, transformOrigin:"-120px -60px", ease:Elastic.easeInOut, repeat:-1});

    var $svgG = $('#G');
    TweenMax.to($svgG, 2, {scale:0.5, yoyo:true, ease:Sine.easeInOut, transformOrigin:"60% 50%",repeat:-1});

    var $prog_meter = $('#prog_meter');
    var $meter = $('.meter');
    var $logo = $('.flex-container');
    var $body = $('body');
    var $html = $('html');

    var t1 = new TimelineMax();
    t1.to($prog_meter, 5, {width:"100%", ease:Power3.easeIn})
    .to($meter,1,{alpha:0})
    .to($logo,3,{width:"500px", ease:Sine.easeIn})
    .to($body,2,{backgroundColor:"#ffffff", delay:-3, ease:Power2.easeIn})
    .to($html,2,{backgroundColor:"#ffffff", delay:-3, ease:Power2.easeIn})
    .to($logo,1,{ alpha:0, ease:Sine.easeIn,delay:-2, onComplete: function(){
        window.location.href="mypage1.html";
    }});
});