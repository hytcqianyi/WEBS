$(function(){
	$("#tb-index").hover(function(){
          $(this).find(".navdropdown").show();
	},function(){
          $(this).find(".navdropdown").hide();
	});

	$(".textinput").click(function(){
		$(".qz-poster-ft").show();
	});
	
});