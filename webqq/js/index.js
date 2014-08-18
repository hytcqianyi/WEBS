$(function(){

     //设置里的个人状态的下拉菜单
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
     //设置里关于扣扣的下拉菜单
     $(".setmes").click(function(){
		if($(this).parent().parent().parent().find(".aboutQQ").attr("isopen")=="false")
		{
			$(".aboutQQ").css("display","block");
			$(this).parent().parent().parent().find(".aboutQQ").attr("isopen","true");
			$(".setmes").css("background-image","url('images/open_arrow_fire.png')");//problems
		}
		else
		{
			$(".aboutQQ").css("display","none");
			$(this).parent().parent().parent().find(".aboutQQ").attr("isopen","false");
			$(".setmes").css("background-image","url('images/open_arrow.png')");
		}       
	});
      
	 //点击联系人里的我的好友A
     $(".conbotline1").click(function(){
          if($(this).parent().find(".haoyou1").attr("isopen")=="false")
      	{
      		$(".haoyou1").css("display","block");
	 		$(this).parent().find(".haoyou1").attr("isopen","true");
      	}
      	else
		{
			$(".haoyou1").css("display","none");
			$(this).parent().find(".haoyou1").attr("isopen","false");
		} 
     });

     //点击联系人里的我的好友B
     $(".conbotline2").click(function(){
          if($(this).parent().find(".haoyou2").attr("isopen")=="false")
      	{
      		$(".haoyou2").css("display","block");
	 		$(this).parent().find(".haoyou2").attr("isopen","true");
      	}
      	else
		{
			$(".haoyou2").css("display","none");
			$(this).parent().find(".haoyou2").attr("isopen","false");
		} 
     });

     //点击联系人里的我的好友C
     $(".conbotline3").click(function(){
          if($(this).parent().find(".haoyou3").attr("isopen")=="false")
      	{
      		$(".haoyou3").css("display","block");
	 		$(this).parent().find(".haoyou3").attr("isopen","true");
      	}
      	else
		{
			$(".haoyou3").css("display","none");
			$(this).parent().find(".haoyou3").attr("isopen","false");
		} 
     });

     //转换好友，群，讨论组
     $("#goodfriend").click(function(){
     	$(".containbottom").show();
     	$(".groupbox").hide();
     	$(".taolunbot").hide();
     	$("#goodfriend").css({"color":"#0aa7ff","border-bottom":"2px solid #0aa7ff"});
     	$("#group").css({"color":"#000","border-bottom":"2px solid #ccc"});
     	$("#taolun").css({"color":"#000","border-bottom":"2px solid #ccc"});
     });
     $("#group").click(function(){
     	$(".containbottom").hide();
     	$(".groupbox").show();
     	$(".taolunbot").hide();
     	$("#goodfriend").css({"color":"#000","border-bottom":"2px solid #ccc"});
     	$("#group").css({"color":"#0aa7ff","border-bottom":"2px solid #0aa7ff"});
     	$("#taolun").css({"color":"#000","border-bottom":"2px solid #ccc"});
     });
     $("#taolun").click(function(){
     	$(".containbottom").hide();
     	$(".groupbox").hide();
     	$(".taolunbot").show();
     	$("#goodfriend").css({"color":"#000","border-bottom":"2px solid #ccc"});
     	$("#group").css({"color":"#000","border-bottom":"2px solid #ccc"});
     	$("#taolun").css({"color":"#0aa7ff","border-bottom":"2px solid #0aa7ff"});
     });

   //点击会话
    $(".mainpanelbottomline1").click(function(){
      $(".mainpanelbottomline1").find(".mainpanelbottomicon1").css("background-image","url('images/select1.png')");
      $(".mainpanelbottomline2").find(".mainpanelbottomicon2").css("background-image","");
      $(".mainpanelbottomline3").find(".mainpanelbottomicon3").css("background-image","");
      $(".mainpanelbottomline4").find(".mainpanelbottomicon4").css("background-image","");
    	$(".chatting").css("display","block");
      $(".contact").css("display","none");
    	$(".find").css("display","none");
    	$(".setting").css("display","none");
		//$(".mainpanelbottomline1").parent().parent().parent().find("").css("","");//!!!!!!!!!!!
	});
	//点击联系人
	$(".mainpanelbottomline2").click(function(){
      $(".mainpanelbottomline1").find(".mainpanelbottomicon1").css("background-image","");
      $(".mainpanelbottomline2").find(".mainpanelbottomicon2").css("background-image","url('images/select2.png')");
      $(".mainpanelbottomline3").find(".mainpanelbottomicon3").css("background-image","");
      $(".mainpanelbottomline4").find(".mainpanelbottomicon4").css("background-image","");
		$(".chatting").css("display","none");
		$(".contact").css("display","block");
    	$(".find").css("display","none");
    	$(".setting").css("display","none");
	});
	//点击发现
	$(".mainpanelbottomline3").click(function(){
      $(".mainpanelbottomline1").find(".mainpanelbottomicon1").css("background-image","");
      $(".mainpanelbottomline2").find(".mainpanelbottomicon2").css("background-image","");
      $(".mainpanelbottomline3").find(".mainpanelbottomicon3").css("background-image","url('images/select3.png')");
      $(".mainpanelbottomline4").find(".mainpanelbottomicon4").css("background-image","");
		  $(".chatting").css("display","none");
		  $(".contact").css("display","none");
    	$(".find").css("display","block");
    	$(".setting").css("display","none");
	});
	//点击设置
    $(".mainpanelbottomline4").click(function(){
      $(".mainpanelbottomline1").find(".mainpanelbottomicon1").css("background-image","");
      $(".mainpanelbottomline2").find(".mainpanelbottomicon2").css("background-image","");
      $(".mainpanelbottomline3").find(".mainpanelbottomicon3").css("background-image","");
      $(".mainpanelbottomline4").find(".mainpanelbottomicon4").css("background-image","url('images/select4.png')");
		  $(".chatting").css("display","none");
		  $(".contact").css("display","none");
    	$(".find").css("display","none");
    	$(".setting").css("display","block");
	});
   
   /*更换背景图片*/
  $(".changepre").hover(function(){
    $(this).css("background-position","-2px -42px");
  },function(){
    $(this).css("background-position","");
  });
  $(".changenext").hover(function(){
    $(this).css("background-position","-25px -41.5px");
  },function(){
    $(this).css("background-position","");
  });
  var index=2;
  $(".changepre").click(function(){

    if (index==1) {
      index=7;
      $("body").css("background-image","url('images/beijing"+index+".jpg')");
    }
    else{
      index--;
      $("body").css("background-image","url('images/beijing"+index+".jpg')");
      
    }
  });
  $(".changenext").click(function(){
    
    if (index==7) {
      index=1;
      $("body").css("background-image","url('images/beijing"+index+".jpg')");
    }
    else{
      /*alert(index);*/
      index++;
      $("body").css("background-image","url('images/beijing"+index+".jpg')");
      
    }
  });


/*对话框*/

  
    /*<!-- talkbox底部 -->*/
  $(".btnf1").click(
    function(){
      $(".btnfwarpnor").removeClass("btnfselected");
      $(this).addClass("btnfselected");
      $(".faceimgtop").css("background-image","url('images/qqimage_01.jpg')");
      $(".item1").show();
      $(".item2").hide();
      $(".item3").hide();
      $(".item4").hide();
      $(".item5").hide();
      $(".item6").hide();
    });
  $(".btnf2").click(function(){
    $(".btnfwarpnor").removeClass("btnfselected");
    $(this).addClass("btnfselected");
    $(".faceimgtop").css("background-image","url('images/qqimage_02.jpg')");
    $(".item2").show();
    $(".item1").hide();
    $(".item3").hide();
    $(".item4").hide();
    $(".item5").hide();
    $(".item6").hide();

  });
  $(".btnf3").click(function(){
    $(".btnfwarpnor").removeClass("btnfselected");
    $(this).addClass("btnfselected");
    $(".faceimgtop").css("background-image","url('images/qqimage_03.jpg')");
    $(".item3").show();
    $(".item2").hide();
    $(".item1").hide();
    $(".item4").hide();
    $(".item5").hide();
    $(".item6").hide();
  });
  $(".btnf4").click(function(){
    $(".btnfwarpnor").removeClass("btnfselected");
    $(this).addClass("btnfselected");
    $(".faceimgtop").css("background-image","url('images/qqimage_04.jpg')");
    $(".item4").show();
    $(".item2").hide();
    $(".item3").hide();
    $(".item1").hide();
    $(".item5").hide();
    $(".item6").hide();
  });
  $(".btnf5").click(function(){
    $(".btnfwarpnor").removeClass("btnfselected");
    $(this).addClass("btnfselected");
    $(".faceimgtop").css("background-image","url('images/qqimage_05.jpg')");
    $(".item5").show();
    $(".item2").hide();
    $(".item3").hide();
    $(".item4").hide();
    $(".item1").hide();
    $(".item6").hide();
  });
  $(".btnf6").click(function(){
    $(".btnfwarpnor").removeClass("btnfselected");
    $(this).addClass("btnfselected");
    $(".faceimgtop").css("background-image","url('images/qqimage_06.jpg')");
    $(".item6").show();
    $(".item2").hide();
    $(".item3").hide();
    $(".item4").hide();
    $(".item5").hide();
    $(".item1").hide();
  });
  $(".faceItem i").hover(function(){
    $(this).css("border","1px solid #4175A6");
  },function(){
    $(this).css("border","0px");
  });
  
  /*var facelen=4;*/
  $(".facetxt").click(function(){
    var facetxt=$(this).attr("txt");
    var nowtxtarea=$(this).parent().parent().parent().parent().prev().find("#textarea");
    var text=nowtxtarea.val();
    var all=text+facetxt;
    var facelen=$(this).attr("txt").length;
    /*alert(facelen);*/
    /*alert(facetxt);*/
    nowtxtarea.val(all);
    
  });
  $(".del").click(function(){
    /*alert(facelen);*/
          var txt=$("#textarea").val();
          var len=$("#textarea").val().length-4;
          var subtxt=txt.substring(0,len);
          /*alert(len);*/
          /*alert(subtxt);*/
          $("#textarea").val(subtxt);
        });
   
   $(document).on("click",".talkboxbpic",function(){
      /*var scroll=$(".talkboxmiddle").scrollTop();
      alert(scroll);*/

      var talkbox=$(this).parent().parent().parent().parent();
      var talk=$(this).parent().parent().parent();
      var bqpic=$(this).parent().parent().parent().next();
      var talkmiddle=$(this).parent().parent().prev();
      var view=bqpic.attr("view");
      alert("d");
      /*alert(view);*/
      if (view=="no") {
        bqpic.show();
        bqpic.attr("view","yes");
        talk.css("height","206px");
        talkbox.css("height","206px");
        talkmiddle.css("height","116px");
        talkmiddle.animate({scrollTop:5000},0);
        
      }
      else{
        bqpic.hide();
        bqpic.attr("view","no");
        talk.css("height","");
        talkbox.css("height","");
        talkmiddle.css("height","");
      }

  });

  /*最小化*/
    $(document).on("click",".talktopmin",function(){
      
      var addhtml="";
      var minfridendid=friendid.substring(11);
      /*alert(minfridendid);*/
      var minimg="friendheadimg"+minfridendid;
      /*alert(minimg);*/
      addhtml+='<div class="chatminpic '+minimg+'">';
      addhtml+=' <div class="chatminid">'
      addhtml+='    0'+minfridendid+'';
      addhtml+='  </div>'
      addhtml+='</div>';
      
      /*$(".chatminpic").addClass(""+minimg+"");*/
      $(".chatmin").append(addhtml);
      $(this).parent().parent().parent().hide();
    });

     $(document).on("click",".talkboxbpic",function(){
      /*var scroll=$(".talkboxmiddle").scrollTop();
      alert(scroll);*/

      var talkbox=$(this).parent().parent().parent().parent();
      var talk=$(this).parent().parent().parent();
      var bqpic=$(this).parent().parent().parent().next();
      var talkmiddle=$(this).parent().parent().prev();
      var view=bqpic.attr("view");
      alert("d");
      /*alert(view);*/
      if (view=="no") {
        bqpic.show();
        bqpic.attr("view","yes");
        talk.css("height","206px");
        talkbox.css("height","206px");
        talkmiddle.css("height","116px");
        talkmiddle.animate({scrollTop:5000},0);
        
      }
      else{
        bqpic.hide();
        bqpic.attr("view","no");
        talk.css("height","");
        talkbox.css("height","");
        talkmiddle.css("height","");
      }
  });
    

});