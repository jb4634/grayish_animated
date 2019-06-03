$(document).ready(function(){

	TweenMax.to('.filler', 0.5,{height:0});
	var controller = new ScrollMagic.Controller();
if ( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
	 // 1. Create a variable
  var $btn_menu = $('.menu-toggle');
  var $masthead = $('.masthead');
  var $title = $('#title');
  var $subtitle = $('#subtitle');
  var $explore = $('#explore');
  // 2. Create a First .to() Tween
  var t1 = new TimelineMax();

  t1.from($masthead,3,{y:"+=1000", ease:Sine.easeOut})
  .from($title,0.1,{alpha:0})
  .from($title,2,{y:-1000,ease:Bounce.easeOut})
  .from($subtitle,2,{x:1000,ease:Power2.easeOut, delay:-1})
  .to($explore,0.1,{alpha:0, delay:-6})
  .from($explore,0.1,{alpha:1, delay:-2})
  .from($explore,2,{x:-1000,ease:Power2.easeOut, delay:-2})
  .from($btn_menu, 3, {x: "+=100", ease:Elastic.easeOut,delay:-2})


//About
var scene = new ScrollMagic.Scene({triggerElement: "#about", duration: 300})
.on('start',function(){
	TweenMax.from($(".lead"),2,{x:-1000,alpha:0,ease:Sine.easeOut});
	TweenMax.from($("#offer"),2,{y:1000, alpha:0,ease:Sine.easeOut});
	TweenMax.from($("#about_title"),2,{y:-1000, opacity:0,ease:Sine.easeOut})
})
.addTo(controller);
/*  
  var scene = new ScrollMagic.Scene({triggerElement: "#about", duration: 300})
	// animate color and top border in relation to scroll position
	.setTween(TweenMax.fromTo($(".lead"),0.1,{x:-5000}, {x:0})) // the tween durtion can be omitted and defaults to 1
	.addTo(controller);
scene = new ScrollMagic.Scene({triggerElement: "#about", duration: 300})
.setTween(TweenMax.fromTo($("#offer"),0.1,{y:2000, alpha:0},{y:0, alpha:1})) // the tween durtion can be omitted and defaults to 1
.addTo(controller);

scene = new ScrollMagic.Scene({triggerElement: "#about", duration: 300})
.setTween(TweenMax.fromTo($("#about_title"),0.1,{y:-2000, opacity:0},{y:0,opacity:1})) // the tween durtion can be omitted and defaults to 1
.addTo(controller);
*/
//Services
scene = new ScrollMagic.Scene({triggerElement: "#services", duration: 300})
.setTween(TweenMax.staggerFromTo('.mb-0',2,{y:-500, alpha:0},{y:0,alpha:1},0.4)) // the tween durtion can be omitted and defaults to 1
.addTo(controller);
scene = new ScrollMagic.Scene({triggerElement: "#services", duration: 300})
.setTween(TweenMax.staggerFromTo('.content-section-heading',2,{y:-500, alpha:0},{y:0,alpha:1},0.4)) // the tween durtion can be omitted and defaults to 1
.addTo(controller);
scene = new ScrollMagic.Scene({triggerElement: "#services", duration: 300})
.setTween(TweenMax.staggerFromTo('.service-icon',2,{x:-5000, alpha:0},{x:0,alpha:1},0.4)) // the tween durtion can be omitted and defaults to 1
.addTo(controller);
scene = new ScrollMagic.Scene({triggerElement: "#services", duration: 300})
.setTween(TweenMax.staggerFromTo('h4',2,{x:-3000, alpha:0},{x:0,alpha:1},0.4)) // the tween durtion can be omitted and defaults to 1
.addTo(controller);

//Callout-slideshow

scene = new ScrollMagic.Scene({triggerElement: "#callout", duration: 100})
.setTween(TweenMax.fromTo('#jssor_1',2,{scale:0, alpha:0},{scale:1,alpha:1})) // the tween durtion can be omitted and defaults to 1
.addTo(controller);

//portfolio
scene = new ScrollMagic.Scene({triggerElement: "#portfolio", duration: 300})
.setTween(TweenMax.fromTo('#portfolio .content-section-heading',2,{y:-1000, alpha:0},{y:0,alpha:1})) // the tween durtion can be omitted and defaults to 1
.addTo(controller);

scene = new ScrollMagic.Scene({triggerElement: "#portfolio", duration: 500})
.setTween(TweenMax.staggerFromTo('#portfolio .left',2,{x:-500, alpha:0, rotation:50},{x:0,alpha:1, rotation:0},0.4)) // the tween durtion can be omitted and defaults to 1
.addTo(controller);

scene = new ScrollMagic.Scene({triggerElement: "#portfolio", duration: 500})
.setTween(TweenMax.staggerFromTo('#portfolio .right',2,{x:500, alpha:0, rotation:-50},{x:0,alpha:1, rotation:0},0.4)) // the tween durtion can be omitted and defaults to 1
.addTo(controller);



scene = new ScrollMagic.Scene({triggerElement: "#action", duration: 350})
.setTween(TweenMax.staggerFromTo('#action .drag-image',2,{scale:0, alpha:0, rotation:-50},{scale:1,alpha:1, rotation:0},0.4)) // the tween durtion can be omitted and defaults to 1
.addTo(controller);


}
 Draggable.create("#action .drag-image", {type:"x,y", edgeResistance:0.65, bounds:"#action", throwProps:true});
})



$(".menu-toggle").click(function(e) {
	var $btn_menu = $('.menu-toggle');
	TweenMax.to($btn_menu,1,{scale:1.1,ease:Elastic.easeIn,delay:-1})
	TweenMax.to($btn_menu,1,{scale:1,ease:Elastic.easeOut,delay:0})
	if(document.getElementById("sidebar-wrapper").classList.contains("active")){
		var $items = $('.sidebar-nav-item');
		TweenMax.staggerFrom($items,2,{x:+200, ease:Power2.easeOut},0.1)

	}
});

$(".btn").click(function(e) {
	TweenMax.to($(this),1,{scale:1.1,ease:Elastic.easeIn,delay:-1})
	TweenMax.to($(this),1,{scale:1,ease:Elastic.easeOut,delay:0})
});

