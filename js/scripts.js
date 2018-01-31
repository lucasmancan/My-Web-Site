
var $target = $('.anime');

var animationClass = 'anime-start';
var offset = $(window).height() * 3/4;
var blocks = $('.anime-rigth');

function animeScroll(){
    var documentTop = $(document).scrollTop();

    $target.each(function(){
        var itemTop = $(this).offset().top;

        if(documentTop > itemTop - offset){
            $(this).addClass(animationClass);
        }else{
            $(this).removeClass(animationClass);
        }
    })
    blocks.each(function(){
        var itemTop = $(this).offset().top;

        if(documentTop > itemTop - offset){
            $(this).addClass(animationClass);
        }else{
            $(this).removeClass(animationClass);
        }
    })
}
animeScroll();  
$(document).scroll(function(){
    animeScroll();
})


var typed = new Typed('#typed', {
    strings: ["Olá","Seja bem-vindo ao meu site!", "Meu nome é ...",  "Lucas Frederico Mançan"],
    typeSpeed: 90
  });


  $('#btn-principal').on('click', function(){

    var seletor = $(this).attr("href");
    posicao = $(seletor).offset().top;
    $("html, body").animate({scrollTop: posicao },1000)
  })