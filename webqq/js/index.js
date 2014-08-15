$(function(){
	// $(".conbotline1").click(function(){
 //           $(".haoyou1").css("display","block");
	// },function(){
 //           $(".haoyou1").css("display","none");
	// });

	$(".statemore").click(function(){
		if($(this).parent().find(".stateul").attr("isopen")=="false")
		{
			$(".stateul").css("display","block");
			$(this).parent().find(".stateul").attr("isopen","true");
		}
		else
		{
			$(".stateul").css("display","none");
			$(this).parent().find(".stateul").attr("isopen","false");
		}
          
	});
});