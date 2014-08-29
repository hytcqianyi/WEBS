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
   		$("#prevslide").attr("isopen","open");
  		showFlashImage();
  		
  });
    $("#nextslide").click(function(){
    	$("#prevslide").attr("isopen","close");
  		showFlashImage();
  });

  $("#homeSlides").hover(function(){
  	clearInterval(timeHandle);
  },function(){
  	$("#nextslide").attr("isopen","close");
  	timeHandle= setInterval("showFlashImage()",2000);
  });
  timeHandle= setInterval("showFlashImage()",2000);
});

var timeHandle;
var currIndex=0;
function showFlashImage(){

	$("#homeSlides").stop(true).animate({"left":"-"+currIndex+"00%"},800);


	if( $("#nextslide").attr("isopen")=="close"){
		currIndex++;
		if(currIndex>4){
			currIndex=0;
		}
	}else{
		currIndex--;
		if(currIndex<0){
			currIndex=4;
		}
	}
	
	
}

