$(document).ready(function(){function e(e){e.target.playVideo()}function n(e){e.target.playVideo()}function i(e){e.target.playVideo()}function t(e){e.target.playVideo()}$(".video-wrap__play").on("click",function(){new YT.Player("player",{height:"100%",width:"100%",videoId:"VxYh4N1vFOM",events:{onReady:e}})}),$(".benefit__slide").slick({asNavFor:".benefit-about--left, .benefit-about--right"}),$(".benefit-about--left").slick({arrows:!1,fade:!0,draggable:!1}),$(".benefit-about--right").slick({arrows:!1,fade:!0,draggable:!1}),$(".reviews__slider").slick({arrows:!1,slidesToShow:1,slidesToScroll:1,centerMode:!0,variableWidth:!0}),$(".reviews__play--first").on("click",function(){new YT.Player("slidePlayer-first",{height:"100%",width:"100%",videoId:"2eUdZXZAhmU",events:{onReady:n}})}),$(".reviews__play--second").on("click",function(){new YT.Player("slidePlayer-second",{height:"100%",width:"100%",videoId:"pqfIn0jQxn0",events:{onReady:i}})}),$(".reviews__play--third").on("click",function(){new YT.Player("slidePlayer-third",{height:"100%",width:"100%",videoId:"fZW6qZunXM4",events:{onReady:t}})}),$(".totop").click(function(){return $("html, body").animate({scrollTop:0},1600),!1}),$("a[href^='#']").click(function(e){var n=$(this).attr("href");return"#"===n?e.preventDefault():($(".menu__nav").removeClass("menu__nav--active"),$(".menu-btn").removeClass("menu-btn_active"),$("html, body").animate({scrollTop:$(n).offset().top},1400)),!1}),$(".menu-btn").on("click",function(e){e.preventDefault,$(".menu__nav").toggleClass("menu__nav--active"),$(this).toggleClass("menu-btn_active")});var a=$(".modal"),l=$("[data-togle=modal]"),o=$(".modal__close");l.on("click",function(){a.toggleClass("modal--visible")}),o.on("click",function(){a.toggleClass("modal--visible")}),$(document).click(function(e){e.target.classList.contains("modal")&&a.removeClass("modal--visible")}),$(document).keydown(function(e){"Escape"===e.key&&a.removeClass("modal--visible")});var s=$(".thanks");$(".thanks__button").on("click",function(){s.removeClass("thanks--visible")}),$(document).click(function(e){e.target.classList.contains("thanks")&&s.removeClass("thanks--visible")}),$(document).keydown(function(e){"Escape"===e.key&&s.removeClass("thanks--visible")}),$("form").each(function(){$(this).validate({errorElement:"div",errorClass:"invalid",rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:18},userEmail:{required:!0,email:!0}},messages:{userName:{required:"Заполните поле",minlength:"Имя должно быть не короче 2 букв",maxlength:"Имя должно быть не длинее 15 букв"},userPhone:{required:"Заполните поле",minlength:"Введите полный номер телефона"},userEmail:{required:"Заполните поле",email:"Введите корректный Email в формате name@domain.com"}},submitHandler:function(e){$.ajax({type:"POST",url:"send.php",data:$(e).serialize(),success:function(n){$(e)[0].reset(),a.removeClass("modal--visible"),s.addClass("thanks--visible")}})}})}),$("[type=tel]").mask("+7 (000) 000-00-00")});