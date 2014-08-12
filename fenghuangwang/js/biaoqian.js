$(function(){
	$(".notcurrentContent").hover(function(){
		var nC1 = $(this).parent().parent().find("#mbox");
		var C1 = $(this).parent().parent().find("#g3box");
		
		
		$(this).parent().find(".selectContent").attr("class","notcurrentContent");
		$(this).attr("class","currentContent selectContent");
		
		nC1.css({"display":"none"});
		C1.css({"display":"block"});

	},function(){
	});
	$(".currentContent").hover(function(){
		var nC1 = $(this).parent().parent().find("#mbox");
		var C1 = $(this).parent().parent().find("#g3box");
		

		$(this).parent().find(".selectContent").attr("class","notcurrentContent");
		$(this).attr("class","currentContent selectContent");

		C1.css({"display":"none"});
		nC1.css({"display":"block"});
		
	},function(){
	});
});



$(function(){
	$(".notcurrentContent").hover(function(){
		var nC1 = $(this).parent().parent().find(".neirong1");
		var C1 = $(this).parent().parent().find(".neirong2");
		
		
		$(this).parent().find(".selectContent").attr("class","notcurrentContent");
		$(this).attr("class","currentContent selectContent");
		
		nC1.css({"display":"none"});
		C1.css({"display":"block"});

	},function(){
	});
	$(".currentContent").hover(function(){
		var nC1 = $(this).parent().parent().find(".neirong1");
		var C1 = $(this).parent().parent().find(".neirong2");
		

		$(this).parent().find(".selectContent").attr("class","notcurrentContent");
		$(this).attr("class","currentContent selectContent");

		C1.css({"display":"none"});
		nC1.css({"display":"block"});
		
	},function(){
	});
});


