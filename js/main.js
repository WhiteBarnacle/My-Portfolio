$(document).ready(function(){
    $('nav .sub').hide();
    $('nav > ul > li').hover(function(){
        $('nav .sub').stop().slideUp(300);
        $(this).find('.sub').stop().slideDown(300);
        $('.sub_bg').stop().slideDown(300);
    });
    $('nav').mouseleave(function(){
        $('nav .sub').stop().slideUp(300);
        $('.sub_bg').stop().slideUp(300);
    });
    //탭메뉴
    $('.tab_con1').show();
    $('.tab_con2').hide();
    $('.t1').click(function(e){
        e.preventDefault();
        $('.t1').addClass('active');
        $('.t2').removeClass('active');
        $('.tab_con1').show();
        $('.tab_con2').hide();
    });
    $('.t2').click(function(e){
        e.preventDefault();
        $('.t1').removeClass('active');
        $('.t2').addClass('active');
        $('.tab_con1').hide();
        $('.tab_con2').show();
    });
});