$(function(){
	$(".CommonTag").mouseover(function(){
		//先将所有置为空
		$(".tabDiv").hide();
		$(".CommonTag").css({
			"background-position":"0 -47px"
		});
		$(".CommonTaga").css({
			"color":"#666"
		});
		//为选中的项赋值
		var curTagId=$(this).attr("curId");
		var curPParent=$(this).parent().parent();
		$(this).parent().parent().attr("curid",curTagId);
		curPParent.find(".tabDiv"+curTagId).show();
		$(this).css({
			"background-position":"0 0"
		});
		$(this).find(".CommonTaga").css({
			"color":"#fff"
		});
	});
	//左右箭头事件
	$(".fpic").hover(function(){
		$("#preImage").css("display","block");
		$("#nextImage").css("display","block");
	},function(){
		$("#preImage").css("display","");
		$("#nextImage").css("display","");
	});
	$(".pre-next").click(function(){
		var curid=$(this).attr("id");
		var curPicId=$(this).parent().parent().attr("curid");
		//先将所有置为空
		$(".tabDiv").hide();
		$(".CommonTag").css({
			"background-position":"0 -47px"
		});
		$(".CommonTaga").css({
			"color":"#666"
		});
		if(curid=="preImage"){curPicId--;}
		if(curid=="nextImage"){curPicId++;}
		//为选中的项赋值
		//var curTagId=$(this).attr("curId");
		var curPParent=$(this).parent().parent();
		$(this).parent().parent().attr("curid",curPicId);
		curPParent.find(".tabDiv"+curPicId).show();
		$(".tag"+curPicId).css({
			"background-position":"0 0"
		});
		$(".tag"+curPicId).find(".CommonTaga").css({
			"color":"#fff"
		});
	});


	//左侧新闻事件
	$(".list1TitleSpecial").next().show();
	$(".list1Title").mouseover(function(){
		$(this).parent().parent().find(".list1Title").attr("class","list1Title");
		$(".colLeft1Inner").hide();

		$(this).attr("class","list1Title list1TitleSpecial");
		$(".list1TitleSpecial").next().show();
	});

	timeHandle=setInterval("taobaoPicShow()",1000);
	//第一个淘宝广告
	$(".taobao").hover(function(){
		clearInterval(timeHandle);
		taobaoPicId1=$(this).attr("value");
		taobaoPicShow();
	},function(){
		timeHandle=setInterval("taobaoPicShow()",1000);
	});
	//第二个淘宝广告
	$(".taobao2").hover(function(){
		clearInterval(timeHandle);
		taobaoPicId2=$(this).attr("value");
		taobaoPicShow();
	},function(){
		timeHandle=setInterval("taobaoPicShow()",1000);
	});

	//音乐，彩铃，手机视频，三标签切换
	$(".tabChannel").mouseover(function(){
		$(".tabChannel").css({
			"border-top":"0px solid #ccc",
			"font-weight":"normal"
		});
		$(".div02").hide();
		var curTab=$(this).attr("tabChannelid");
		$("#content"+curTab).show();
		$(this).css({
			"border-top":"3px solid #ccc",
			"font-weight":"bold"
		});
	});
	//第三个广告
	$(".fangge").mouseover(function(){
			$(".fangge").css({
				"background-color":"#fff",
				"cursor":"default"
			});
			$(".ad20021").hide();
			var curTab=$(this).attr("value");
			$(".ad20021"+curTab).show();
			$(this).css({
				"background-color":"#f00",
					"cursor":"pointer"
			});
	});
		

});

var timeHandle;
var taobaoPicId1=0;
var taobaoPicId2=0;
var taobaoPicArray1=new Array('url("images/taobao/53571f44de9d7.jpg")','url("images/taobao/53aa763d921f4.jpg")','url("images/taobao/53ba6dce2389d.jpg")','url("images/taobao/53df33fba2134.jpg")','url("images/taobao/53e2eaa75634e.jpg")',
	'url("images/taobao/528ad0061576b.jpg")','url("images/taobao/528f000a88ba4.jpg")','url("images/taobao/52131ddea2de6.jpg")','url("images/taobao/53918e323b735.jpg")','url("images/taobao/539032ba47ca9.jpg")');
var taobaoPicArray2=new Array('url("images/taobao/53571f44de9d7.jpg")','url("images/taobao/53aa763d921f4.jpg")','url("images/taobao/53ba6dce2389d.jpg")','url("images/taobao/53df33fba2134.jpg")','url("images/taobao/53e2eaa75634e.jpg")',
	'url("images/taobao/528ad0061576b.jpg")','url("images/taobao/528f000a88ba4.jpg")','url("images/taobao/52131ddea2de6.jpg")','url("images/taobao/53918e323b735.jpg")','url("images/taobao/539032ba47ca9.jpg")');



function taobaoPicShow(){
	//第一个淘宝广告
	$("#tab-panelPicShow").css("background-image",taobaoPicArray1[taobaoPicId1]);
	$(".taobao").css("background-color","#5F5F5F");
	$(".taobaoid"+taobaoPicId1).css("background-color","red");
	taobaoPicId1++;
	if(taobaoPicId1>=10){
		taobaoPicId1=0;
	}
	//第二个淘宝广告
	$("#tab-panelPicShow2").css("background-image",taobaoPicArray1[taobaoPicId2]);
	$(".taobao2").css("background-color","#5F5F5F");
	$(".taobao2id"+taobaoPicId2).css("background-color","red");
	taobaoPicId2++;
	if(taobaoPicId2>=10){
		taobaoPicId2=0;
	}
}