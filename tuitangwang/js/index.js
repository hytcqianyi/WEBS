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
});

var n=1;
function showitem(){
	/*改变大框的位置*/
	$(".dt-slider-content").animate({"left":"-"+(n*100)+"%"},1000);
	n++;
	if(n>6){n=1;}
}


$(function(){
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

$(function(){
	$(".dt-carousel-points").click(function(){
		
		//先将所有置为空
		$(".dt-carousel-item").hide();
		$(".dt-carousel-point").css({
			"background-position":"-978px -240px"
		});

		//为选中的项赋值
		var curTagId=$(this).attr("cId");
		var curPParent=$(this).parent().parent().parent();
		
		curPParent.find(".it"+curTagId).show();
		$(this).css({
			"background-position":"-1002px -240px"
		});
      });
	});