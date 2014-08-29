$(function(){
   $(".current1").hover(function(){
        $(this).find(".fn-hide").show();
        $(".service").css("background-position"," 0 -57px");
   },function(){
        $(this).find(".fn-hide").hide();
        $(".service").css("background-position","");
   });
   $(".current2").hover(function(){
        $(this).find(".fn-hide").show();
        $(".activity").css("background-position"," 0 -95px");
   },function(){
        $(this).find(".fn-hide").hide();
        $(".activity").css("background-position","");
   });
   $(".current3").hover(function(){
        $(this).find(".fn-hide").show();
        $(".about").css("background-position"," 0 -133px");
   },function(){
        $(this).find(".fn-hide").hide();
        $(".about").css("background-position","");
   });
   $(".current4").hover(function(){
        $(".retailer").css("background-position"," 0 -209px");
   },function(){
        $(".retailer").css("background-position","");
   });
   $(".current5").hover(function(){
        $(".search").css("background-position"," 0 -247px");
   },function(){
        $(".search").css("background-position","");
   });
   $(".current6").hover(function(){
        $(".tianmao").css("background-position"," 0 -285px");
   },function(){
        $(".tianmao").css("background-position","");
   });
   $(".current11").hover(function(){
        $(this).find(".fn-hide").show();
        $(".LIGHTERS").css("background-position"," 0 -36px");
   },function(){
        $(this).find(".fn-hide").hide();
        $(".LIGHTERS").css("background-position","");
   });
   $(".current12").hover(function(){
        $(this).find(".fn-hide").show();
        $(".OUTDOOR").css("background-position"," 0 -109px");
   },function(){
        $(this).find(".fn-hide").hide();
        $(".OUTDOOR").css("background-position","");
   });
   $(".current13").hover(function(){
        $(this).find(".fn-hide").show();
        $(".LIFESTYLE").css("background-position"," 0 -180px");
   },function(){
        $(this).find(".fn-hide").hide();
        $(".LIFESTYLE").css("background-position","");
   });
   $(".current14").hover(function(){
        $(this).find(".fn-hide").show();
        $(".HOMES").css("background-position"," 0 -253px");
   },function(){
        $(this).find(".fn-hide").hide();
        $(".HOMES").css("background-position","");
   });
});



$(function(){
   $("#prevslide").click(function(){
     direction=0;//改变运动方向
  	 showFlashImage();	
  });
    $("#nextslide").click(function(){
    	direction=1;//改变运动方向
  		showFlashImage();
  });

  $("#homeSlides").hover(function(){
  	clearInterval(timeHandle);
  },function(){
  //	$("#nextslide").attr("isopen","close");
  	timeHandle= setInterval("showFlashImage()",2000);
  });
  timeHandle= setInterval("showFlashImage()",2000);
});

var timeHandle;
var currIndex=1;
var clicktimeSetting=1;
var direction=1;

function showFlashImage(){
   if(clicktimeSetting==1){//如果当前可以切换图片，则..
    clicktimeSetting=0;//开始切换前，先将其置为不可用，完成图片切换操作后再将其置为可用
    if(direction==1){//向右方向运动
      $("#homeSlides .homeSlide").eq(4).animate({"left":"100%"},800);
      $("#homeSlides .homeSlide").eq(3).animate({"left":"0%"},800);
      $("#homeSlides .homeSlide").eq(2).animate({"left":"-100%"},800);//分别将前四张图片向右移动960px,即一张图片的距离
      $("#homeSlides .homeSlide").eq(1).animate({"left":"-200%"},800,function(){
           clicktimeSetting=1;//完成图片切换操作后再将其置为可用
      });
      var className=$("#homeSlides .homeSlide").eq(0).attr("class");//先将最后一个元素中的内容取出来
      $("#homeSlides .homeSlide").eq(0).remove();//取出内容之后就将它移除
      $("#homeSlides").append('<div class="'+className+'" style="left:200%"></div>');
    }else if(direction==0){//向左方向运动
      $("#homeSlides .homeSlide").eq(3).animate({"left":"200%"},800);
      $("#homeSlides .homeSlide").eq(2).animate({"left":"100%"},800);
      $("#homeSlides .homeSlide").eq(1).animate({"left":"0"},800);//分别将前四张图片向右移动960px,即一张图片的距离
      $("#homeSlides .homeSlide").eq(0).animate({"left":"-100%"},800,function(){
          clicktimeSetting=1;//完成图片切换操作后再将其置为可用
      });
      var className=$("#homeSlides .homeSlide").eq(4).attr("class");//先将最后一个元素中的内容取出来
      $("#homeSlides .homeSlide").eq(4).remove();//取出内容之后就将它移除
      $("#homeSlides").prepend('<div class="'+className+'" style="left:-200%"></div>');
      }
    }
}

