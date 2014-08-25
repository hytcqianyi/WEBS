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
             $(".mt-indicator").css("background-position","0 -80px;");
           }
           else if($(this).parent().find(".cont1").attr("isopen")=="true")
           {

             $(this).parent().find(".cont1").attr("isopen","false");
             $(this).parent().find(".cont1").hide();
             $(".mt-indicator").css("background-position","0 -68px;");
           }
       });
       $(".mt-indicator2").click(function(){
           if($(this).parent().find(".cont2").attr("isopen")=="false")
           { 
             $(this).parent().find(".cont2").attr("isopen","true");
             $(this).parent().find(".cont2").show();
             $(".mt-indicator2").css("background-position","0 -80px;");
           }
           else if($(this).parent().find(".cont2").attr("isopen")=="true")
           {

             $(this).parent().find(".cont2").attr("isopen","false");
             $(this).parent().find(".cont2").hide();
             $(".mt-indicator2").css("background-position","0 -68px;");
           }
       });
       
       /*当点击更多筛选条件时*/
       $(".search-opt").click(function(){
           if($(this).parent().parent().find("#MoreControl").attr("isopen")=="false")
           { 
             $(this).parent().parent().find("#MoreControl").attr("isopen","true");
             $(this).parent().parent().find("#MoreControl").show();
             // $(this).html("精简删选条件");
           }
           else if($(this).parent().parent().find("#MoreControl").attr("isopen")=="true")
           {

             $(this).parent().parent().find("#MoreControl").attr("isopen","false");
             $(this).parent().parent().find("#MoreControl").hide();
             // $(this).html("更多筛选条件");
           }
       });
       $(".order-hd").hover(function(){
               $(".share-delete-makepoint").show();
               $(this).parent().find(".mainOrder723505153175048successorder").css("border","1px solid #bfbfbfb;");

       },function(){
               $(".share-delete-makepoint").hide();
               $(this).parent().find(".mainOrder723505153175048successorder").css("border","");
       });
});