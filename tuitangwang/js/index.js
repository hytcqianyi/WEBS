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