$(function(){
	$("#dt-nav").hover(function(){
		$("#dt-nav-content").show();
		$("#dt-nav-btn-cover").css("height","40px")
	},function(){
		$("#dt-nav-content").hide();
		$("#dt-nav-btn-cover").css("height","28px")
	});
	$(".dt-ologin-icons").hover(function(){
		$(".dt-menu").show();
		
	},function(){
		$(".dt-menu").hide();
	});
	$(".dt-slider-point").click(function(){
		showitem();
		// //先将所有置为空
		// $(".dt-slider-item").hide();
		// $(".dt-slider-point").css({
		// 	"background-position":"-978px -240px"
		// });

		// //为选中的项赋值
		// var curTagId=$(this).attr("curId");
		// var curPParent=$(this).parent().parent().parent().parent();
		// //$(this).parent().parent().parent().parent().attr("curid",curTagId);
		// curPParent.find(".item"+curTagId).show();
		// $(this).css({
		// 	"background-position":"-1002px -240px"
		// });
      });
});

var n=1;
function showitem(){
	/*改变大框的位置*/
	$(".dt-slider-content").animate({"left":"-"+(n*100)+"%"},1000);
	n++;
	if(n>6){n=1;}
}



$(function(){

  $(".dt-carousel-point").click(function(){
  		currIndex=$(this).attr("picIndex");
  		showFlashImage();

  });
  $(".dt-carousel-content").hover(function(){
  	clearInterval(timeHandle);
  },function(){
  	timeHandle= setInterval("showFlashImage()",2000);
  });
  timeHandle= setInterval("showFlashImage()",2000);
});

var timeHandle;
var currIndex=2;
function showFlashImage(){
	$(".dt-carousel-item").hide();//css("background-image","url(images/datu" + currIndex +".jpg)");
	$(".it"+currIndex).show(500);
	$(".dt-carousel-point").removeClass("cur");
	$("#p"+ currIndex ).addClass("cur");
	currIndex++;
	if(currIndex==6){
		currIndex=1;
	}
	
	
}