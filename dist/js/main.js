$(document).ready(function(){var e;function i(e){e.target.playVideo()}function n(i){i.target.playVideo(),$(".reviews-slider").on("afterChange",function(){e.pauseVideo()})}function a(i){i.target.playVideo(),$(".reviews-slider").on("afterChange",function(){e.pauseVideo()})}function s(i){i.target.playVideo(),$(".reviews-slider").on("afterChange",function(){e.pauseVideo()})}$(".video-wrap__play").on("click",function(){e=new YT.Player("player",{height:"100%",width:"100%",videoId:"VxYh4N1vFOM",events:{onReady:i}})}),$(".benefit__slide").slick({asNavFor:".benefit-about--left, .benefit-about--right"}),$(".benefit-about--left").slick({arrows:!1,fade:!0,draggable:!1}),$(".benefit-about--right").slick({arrows:!1,fade:!0,draggable:!1}),$(".reviews__slider").slick({arrows:!1,slidesToShow:1,slidesToScroll:1,centerMode:!0,variableWidth:!0,autoplay:!0,autoplaySpeed:2500,speed:800}),$(".lessons__number").slick({arrows:!0,dots:!0,appendArrows:".lessons__buttons",draggable:!1,infinite:!1,speed:600,easing:"linear",responsive:[{breakpoint:576,settings:{arrows:!1}}]}),$(".reviews__play--first").on("click",function(){e=new YT.Player("slidePlayer-first",{height:"100%",width:"100%",videoId:"2eUdZXZAhmU",events:{onReady:n}})}),$(".reviews__play--second").on("click",function(){e=new YT.Player("slidePlayer-second",{height:"100%",width:"100%",videoId:"eg3s0c_X_ao",events:{onReady:a}})}),$(".reviews__play--third").on("click",function(){e=new YT.Player("slidePlayer-third",{height:"100%",width:"100%",videoId:"fZW6qZunXM4",events:{onReady:s}})}),$(".totop").click(function(){return $("html, body").animate({scrollTop:0},1600),!1}),$("a[href^='#']").click(function(e){var i=$(this).attr("href");return"#"===i?e.preventDefault():($(".menu__nav").removeClass("menu__nav--active"),$(".menu-btn").removeClass("menu-btn_active"),$("html, body").animate({scrollTop:$(i).offset().top},1400)),!1}),$(".menu-btn").on("click",function(e){e.preventDefault,$(".menu__nav").toggleClass("menu__nav--active"),$(this).toggleClass("menu-btn_active")});var t=$(".modal"),o=$("[data-togle=modal]"),l=$(".modal__close");o.on("click",function(){t.toggleClass("modal--visible")}),l.on("click",function(){t.toggleClass("modal--visible")}),$(document).click(function(e){e.target.classList.contains("modal")&&t.removeClass("modal--visible")}),$(document).keydown(function(e){"Escape"===e.key&&t.removeClass("modal--visible")});var r=$(".thanks");$(".thanks__button").on("click",function(){r.removeClass("thanks--visible")}),$(document).click(function(e){e.target.classList.contains("thanks")&&r.removeClass("thanks--visible")}),$(document).keydown(function(e){"Escape"===e.key&&r.removeClass("thanks--visible")});var c=$(".processing");$(".processing__button").on("click",function(){c.removeClass("processing--visible")}),$(document).click(function(e){e.target.classList.contains("processing")&&c.removeClass("processing--visible")}),$(document).keydown(function(e){"Escape"===e.key&&c.removeClass("processing--visible")}),$("form").each(function(){$(this).validate({errorElement:"div",errorClass:"invalid",rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:18},userEmail:{required:!0,email:!0},trading:{required:!0},profit:{required:!0},broker:{required:!0},deposit:{required:!0}},messages:{userName:{required:"Заполните поле",minlength:"Имя должно быть не короче 2 букв",maxlength:"Имя должно быть не длинее 15 букв"},userPhone:{required:"Заполните поле",minlength:"Введите полный номер телефона"},userEmail:{required:"Заполните поле",email:"Введите корректный Email в формате name@domain.com"},trading:{required:"Заполните поле"},profit:{required:"Заполните поле"},broker:{required:"Заполните поле"},deposit:{required:"Заполните поле"}},submitHandler:function(e){$(e).hasClass("calc__form")?$.ajax({type:"POST",url:"calc.php",data:$(e).serialize(),success:function(i){return $(e)[0].reset(),c.addClass("processing--visible"),ym(64664599,"reachGoal","calc"),!0}}):$.ajax({type:"POST",url:"send.php",data:$(e).serialize(),success:function(i){return $(e)[0].reset(),t.removeClass("modal--visible"),r.addClass("thanks--visible"),ym(64664599,"reachGoal","form"),!0}})}})}),$(".calc__input").bind("change keyup input click",function(){this.value.match(/[^0-9]/g)&&(this.value=this.value.replace(/[^0-9]/g,""))}),$("[type=tel]").mask("+7 (000) 000-00-00"),new WOW({boxClass:"wow",animateClass:"animate__animated",offset:0,mobile:!0,live:!0,callback:function(e){},scrollContainer:null,resetAnimation:!0}).init(),$(window).scroll(function(){$(this).scrollTop()>150&&$(this).scrollTop()+200<$("html").height()-$(window).height()?$(".totop--scroll").fadeIn():$(".totop--scroll").fadeOut()})});