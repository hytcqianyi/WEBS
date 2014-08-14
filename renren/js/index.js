$(function(){
     $(".show-more").hover(function(){
     	 $("#moredownWeb").show();

     	  $(".show-more").css({"color":"black","background-color":"white","border":"1px solid black"})
     },function(){
         $("#moredownWeb").hide();
         $(".show-more").css({"color":"white","background-color":"#296fab","border":"none"})
     });
        $("#onclick").click(function(){
          $("#mainRecommend").hide();
          $("#introDetail").show();
        });
        $("#moreIntroClose").click(function(){
          $("#mainRecommend").show();
          $("#introDetail").hide();
        });
        
});