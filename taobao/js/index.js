$(function(){
      $(".menubdA").hover(function(){
              $(".menubdAmore").show();
      },function(){
              $(".menubdAmore").hide();
      });
      $(".getmenu").hover(function(){
              $(".getxinfengmore").show();
      },function(){
              $(".getxinfengmore").hide();
      });
      $(".mytaobao").hover(function(){
             $(".menuhdr1").show();
      },function(){
              $(".menuhdr1").hide();
      });
       $(".gouwuche").hover(function(){
             $(".menuhdr2").show();
      },function(){
              $(".menuhdr2").hide();
      });
       $(".shoucangjia").hover(function(){
             $(".menuhdr3").show();
      },function(){
              $(".menuhdr3").hide();
      });
       $(".maijia").hover(function(){
             $(".menuhdr4").show();
      },function(){
              $(".menuhdr4").hide();
      });

       /*最左侧的标签栏伸缩*/
       $(".mt-indicator").click(function(){
       
           if($(this).parent().find(".cont1").attr("isopen")=="false")
           { 
             $(this).parent().find(".cont1").attr("isopen","true");
             $(this).parent().find(".cont1").show();
             $(this).css("background-position","0 -80px;");
           }
           else if($(this).parent().find(".cont1").attr("isopen")=="true")
           {

             $(this).parent().find(".cont1").attr("isopen","false");
             $(this).parent().find(".cont1").hide();
             $(this).css("background-position","0 -68px;");
           }
       });
       
});