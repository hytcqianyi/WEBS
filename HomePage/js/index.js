$(function(){
    $(".icon").hover(function(){
         $(this).find(".explain").show();
    },function(){
         $(this).find(".explain").hide();
    });
});