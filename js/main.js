$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass("change")
    })
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 300){
        $('.nav-menu').addClass('custom-navbar');
    }else{
        $('.nav-menu').removeClass('custom-navbar ');
    }
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 700){
        $('.award-text').addClass('fromright');
        $('.award-img').addClass('fromleft');
    }else{
        $('.award-text').removeClass('fromright');
        $('.award-img').removeClass('fromleft');
    }
})

$('.list-gallery-item ').click(function(){
    let value = $(this).attr('data-filter');
    $(this).addClass('active-item').siblings().removeClass('active-item');
    if(value == 'all'){

        $('.filter').show(300);

    }else{

        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);

    }
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 4400){
        $('.card-1').addClass('movefromright');
        $('.card-2').addClass('movefromcenter');
        $('.card-3').addClass('movefromleft');
    }else{
        $('.card-1').removeClass('movefromright');
        $('.card-2').removeClass('movefromcenter');
        $('.card-3').removeClass('movefromleft');
    }
})