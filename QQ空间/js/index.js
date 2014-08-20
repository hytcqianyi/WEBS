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
	$(".deletevisitor").hover(function(){
          $(".deleteoption").show();
	},function(){
          $(".deleteoption").hide();
	});
	$(".item1").hover(function(){
          $(".item11").show();
	},function(){
          $(".item11").hide();
	});
	$(".item2").hover(function(){
          $(".item22").show();
	},function(){
          $(".item22").hide();
	});
	$(".item3").hover(function(){
          $(".item33").show();
	},function(){
          $(".item33").hide();
	});
	$(".item4").hover(function(){
          $(".item44").show();
	},function(){
          $(".item44").hide();
	});
	$(".item5").hover(function(){
          $(".item55").show();
	},function(){
          $(".item55").hide();
	});
	$(".item6").hover(function(){
          $(".item66").show();
	},function(){
          $(".item66").hide();
	});
	$(".item7").hover(function(){
          $(".item77").show();
	},function(){
          $(".item77").hide();
	});
	$(".item8").hover(function(){
          $(".item88").show();
	},function(){
          $(".item88").hide();
	});
	$(".item9").hover(function(){
          $(".item99").show();
	},function(){
          $(".item99").hide();
	});

	$(".title").click(function(){
		$(".title").css({"font-weight":"bold","color":"black"});
		$(".visitYou").css({"font-weight":"normal","color":"#5d7895"});
		$(".refuseYou").css({"font-weight":"normal","color":"#5d7895"});
        $(".visitMeContainer").show();
        $(".visitYouContainer").hide();
        $(".refuseYouContainer").hide();
	});
	$(".visitYou").click(function(){
		$(".title").css({"font-weight":"normal","color":"#5d7895"});
		$(".visitYou").css({"font-weight":"bold","color":"black"});
		$(".refuseYou").css({"font-weight":"normal","color":"#5d7895"});
        $(".visitMeContainer").hide();
        $(".visitYouContainer").show();
        $(".refuseYouContainer").hide();
	});
	$(".refuseYou").click(function(){
		$(".title").css({"font-weight":"normal","color":"#5d7895"});
		$(".visitYou").css({"font-weight":"normal","color":"#5d7895"});
		$(".refuseYou").css({"font-weight":"bold","color":"black"});
        $(".visitMeContainer").hide();
        $(".visitYouContainer").hide();
        $(".refuseYouContainer").show();
	});
	$(window).scroll(function(){
		var scrolls = $(this).scrollTop();
		// alert(scrolls);
		if( scrolls>1800)
		{
			$("#sidebar-ic-fixed").css("position", "fixed");
		}
	});
	$("#tab_switch").click(function(){
		     $("#tab_switch").hide();
             $("#tab_hide_list").show();
	
	});
	$("#tab_switch2").click(function(){
		     $("#tab_switch2").hide();
             $("#tab_hide_list2").show();
	
	});
	$(".playdata").hover(function(){
           $(".number").hide();
		   $(".gb_bt1").show();
	},function(){
		   $(".number").show();
		   $(".gb_bt1").hide();
	});
	$(".playdata2").hover(function(){
           $(".number2").hide();
		   $(".gb_bt2").show();
	},function(){
		   $(".number2").show();
		   $(".gb_bt2").hide();
	});
});