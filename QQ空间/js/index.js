$(function(){
	$("#tb-index").hover(function(){
          $(this).find(".navdropdown").show();
	},function(){
          $(this).find(".navdropdown").hide();
         
	});
	$("#tb-friend").hover(function(){
          $(this).find(".navdropdown").show();
	},function(){
          $(this).find(".navdropdown").hide();
         
	});
	
	$("#tb-app").hover(function(){
          $(this).find(".navdropdown").show();
	},function(){
          $(this).find(".navdropdown").hide();
         
	});
	$("#tb-dress").hover(function(){
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
		else 
		{

			$("#sidebar-ic-fixed").css("position", "");
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
	$(".app1").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".app2").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".app3").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".app4").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".app5").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".app6").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".app7").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".app8").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".app9").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".app10").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".app11").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".app12").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".app13").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".app14").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".app15").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".link1").click(function(){
		$(".js-dress-list1").show();
		$(".js-dress-list2").hide();
		$(".js-dress-list3").hide();
		$(".js-dress-list4").hide();
	});
	$(".link2").click(function(){
		$(".js-dress-list1").hide();
		$(".js-dress-list2").show();
		$(".js-dress-list3").hide();
		$(".js-dress-list4").hide();
	});
	$(".link3").click(function(){
		$(".js-dress-list1").hide();
		$(".js-dress-list2").hide();
		$(".js-dress-list3").show();
		$(".js-dress-list4").hide();
	});
	$(".link4").click(function(){
		$(".js-dress-list1").hide();
		$(".js-dress-list2").hide();
		$(".js-dress-list3").hide();
		$(".js-dress-list4").show();
	});
	$(".music-container").hover(function(){
             $(this).find(".music-play").css("background-color","#e4e4e4");
             $(this).find(".ico-music-play").css("background-position","-790px -150px");
             $(this).find(".music-dynamic").css("background-color","#e4e4e4");       
             $(this).find(".ico-music-dynamic").css("background-position","-790px -175px");
	},function(){
             $(this).find(".music-play").css("background-color","");
             $(this).find(".ico-music-play").css("background-position","");
             $(this).find(".music-dynamic").css("background-color","");
             $(this).find(".ico-music-dynamic").css("background-position","");
	});
	$("#tb_setting_li").hover(function(){
           $(this).parent().parent().find(".user-drop-down").show();
	},function(){
           $(this).parent().parent().find(".user-drop-down").hide();
	});
	$(".vip-setting").hover(function(){
           $(this).parent().parent().find(".vip-drop-down").show();
	},function(){
           $(this).parent().parent().find(".vip-drop-down").hide();
	});
	$(".qz-poster-bd").click(function(){
		$(".qz-poster-ft").show();
		return false;
	});
	$(document).click(function(){
		$(".qz-poster-ft").hide();
	});
	$(".emot").hover(function(){
          $(".icon-emot").css("background-position","-464px -75px");
	},function(){
          $(".icon-emot").css("background-position","");
	});
	$(".at").hover(function(){
          $(".icon-at").css("background-position","-464px -125px");
	},function(){
          $(".icon-at").css("background-position","");
	});
	$(".topic").hover(function(){
          $(".icon-topic").css("background-position","-464px -175px");
	},function(){
          $(".icon-topic").css("background-position","");
	});
	$(".allside1").hover(function(){
		$(".allsidepic1").css("background-position","-615px -25px");
		$(".allside1").css("background-color","#f0f0f0");
	},function(){
        $(".allsidepic1").css("background-position","");
		$(".allside1").css("background-color","");
	});
	$(".allside2").hover(function(){
		$(".allsidepic2").css("background-position","-615px -75px");
		$(".allside2").css("background-color","#f0f0f0");
	},function(){
        $(".allsidepic2").css("background-position","");
		$(".allside2").css("background-color","");
	});
	$(".allside3").hover(function(){
		$(".allsidepic3").css("background-position","-615px -125px");
		$(".allside3").css("background-color","#f0f0f0");
	},function(){
        $(".allsidepic3").css("background-position","");
		$(".allside3").css("background-color","");
	});
    $(".allside4").hover(function(){
		$(".allsidepic4").css("background-position","-615px -175px");
		$(".allside4").css("background-color","#f0f0f0");
	},function(){
        $(".allsidepic4").css("background-position","");
		$(".allside4").css("background-color","");
	});
	$(".audience").hover(function(){
        $(".allpeople").show();
	},function(){
        $(".allpeople").hide();
	});
        
/*最右边第一个向左向右转换的幻灯片*/
        BgIndex=1;
   $(".p_prev").click(function(){
		BgIndex--;
		if(BgIndex==0)
		{
			BgIndex=3;
		}
		$(".QM_allsee_Body").hide();
		$(".Body"+BgIndex).show();
		
	});
	$(".p_next").click(function(){
		BgIndex++;
		if(BgIndex==4)
		{
			BgIndex=1;
		}
		$(".QM_allsee_Body").hide();
		$(".Body"+BgIndex).show();
		
	});
	/*最右边第二个向左向右转换的幻灯片*/
        PrIndex=1;
   $(".p_prev").click(function(){
		PrIndex--;
		if(PrIndex==0)
		{
			PrIndex=3;
		}
		$(".QM_present_Body").hide();
		$(".present"+PrIndex).show();
		
	});
	$(".p_next").click(function(){
		PrIndex++;
		if(PrIndex==4)
		{
			PrIndex=1;
		}
		$(".QM_present_Body").hide();
		$(".present"+PrIndex).show();
		
	});
    /*最右边第三个向左向右转换的幻灯片*/
        FkIndex=1;
   $(".prev3").click(function(){
		FkIndex--;
		if(FkIndex==0)
		{
			FkIndex=2;
		}
		$(".QM_fangke_Body").hide();
		$(".fangke"+FkIndex).show();
		
	});
	$(".next3").click(function(){
		FkIndex++;
		if(FkIndex==3)
		{
			FkIndex=1;
		}
		$(".QM_fangke_Body").hide();
		$(".fangke"+FkIndex).show();
		
	});
      
      /*当鼠标点到回复框架的拾货转换另外一种形式的对话框*/
      $(".poster1").click(function(){
      	 $(".poster1").hide();
      	 $(".wrap1").show();
      	 return false
      });
     $(document).click(function(){
     	 $(".poster1").show();
		$(".wrap1").hide();
	});
     $(".poster2").click(function(){
      	 $(".poster2").hide();
      	 $(".wrap2").show();
      	 return false
      });
     $(document).click(function(){
     	 $(".poster2").show();
		$(".wrap2").hide();
	});
       $(".poster3").click(function(){
      	 $(".poster3").hide();
      	 $(".wrap3").show();
      	 return false
      });
     $(document).click(function(){
     	 $(".poster3").show();
		$(".wrap3").hide();
	});
     $(".poster4").click(function(){
      	 $(".poster4").hide();
      	 $(".wrap4").show();
      	 return false
      });
     $(document).click(function(){
     	 $(".poster4").show();
		$(".wrap4").hide();
	});
     $(".poster5").click(function(){
      	 $(".poster5").hide();
      	 $(".wrap5").show();
      	 return false
      });
     $(document).click(function(){
     	 $(".poster5").show();
		$(".wrap5").hide();
	});
     $(".poster6").click(function(){
      	 $(".poster6").hide();
      	 $(".wrap6").show();
      	 return false
      });
     $(document).click(function(){
     	 $(".poster6").show();
		$(".wrap6").hide();
	});
     $(".poster7").click(function(){
      	 $(".poster7").hide();
      	 $(".wrap7").show();
      	 return false
      });
     $(document).click(function(){
     	 $(".poster7").show();
		$(".wrap7").hide();
	});
});