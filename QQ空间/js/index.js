$(function(){
	$("#tb-index").hover(function(){
          $(this).find(".navdropdown").show();
	},function(){
          $(this).find(".navdropdown").hide();
	});

	$(".textinput").hover(function(){
		$(".qz-poster-ft").show();
	});
	$(".item-on").hover(function(){
		$(".tab-bubble").show();
	},function(){
          $(".tab-bubble").hide();
	});

	$(".feed_friend_refresh").hover(function(){
           $(".icon-refresh").css("background-position","-965px -1px");
	},function(){
           $(".icon-refresh").css("background-position","")
	});
	$(".feed_friend_set").hover(function(){
           $(".icon-set").css("background-position","-965px -26px");
	},function(){
           $(".icon-set").css("background-position","")
	});

	$(".qz_btn_reply1").hover(function(){
		$(".qz_btn_reply1").css("border","1px solid #d9d9d9");
	},function(){
        $(".qz_btn_reply1").css("border","")
	});
	$(".qz_btn_reply2").hover(function(){
		$(".qz_btn_reply2").css("border","1px solid #d9d9d9");
	},function(){
        $(".qz_btn_reply2").css("border","")
	});
	$(".qz_btn_reply3").hover(function(){
		$(".qz_btn_reply3").css("border","1px solid #d9d9d9");
	},function(){
        $(".qz_btn_reply3").css("border","")
	});
	$(".qz_btn_reply4").hover(function(){
		$(".qz_btn_reply4").css("border","1px solid #d9d9d9");
	},function(){
        $(".qz_btn_reply4").css("border","")
	});
	$(".item-sp").hover(function(){
		$(".item-sp").css("border","1px solid #d9d9d9");
	},function(){
        $(".item-sp").css("border","")
	});
	$(".btn-insert-img").hover(function(){
		       $(this).find(".icon-camera-16").css("background-position","-640px -25px") ;
               $(".btn-insert-imgXL").show();
	},function(){
		       $(this).find(".icon-camera-16").css("background-position","") ;
               $(".btn-insert-imgXL").hide();
	});
	$(".QM_care_me").click(function(){
	       $(".QM_care_me").css({"font-weight":"bold","color":"black"});
	       $(".QM_care_who").css({"font-weight":"normal","color":"#5d7895"});
           $("#QM_friendship_care_me").show();
           $("#QM_friendship_care_who").hide();
	});
	$(".QM_care_who").click(function(){
		   $(".QM_care_me").css({"font-weight":"normal","color":"#5d7895"});
	       $(".QM_care_who").css({"font-weight":"bold","color":"black"});
           $("#QM_friendship_care_me").hide();
           $("#QM_friendship_care_who").show();
	});
	
});