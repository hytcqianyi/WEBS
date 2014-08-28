$(function(){
   $("#prev").click(function(){
   	alert("a");
      $("#prev").attr("isopen","open");
      showFlashImage();
      
  });
    $("#next").click(function(){
      $("#prev").attr("isopen","close");
      showFlashImage();
  });

//   $(".slidewrapper").hover(function(){
//     clearInterval(timeHandle);
//   },function(){
//     $("#prev").attr("isopen","close");
//     timeHandle= setInterval("showFlashImage()",2000);
//   });
//   //timeHandle= setInterval("showFlashImage()",2000);
});

var timeHandle;
var currIndex=0;
function showFlashImage(){

  $("#ImageSlider").stop(true).animate({"left":"-"+currIndex+"00%"},800);
  if( $("#prev").attr("isopen")=="close"){
    currIndex++;
    if(currIndex=4){
      currIndex=0;
    }
  }else{
    currIndex--;
    if(currIndex=0){
      currIndex=4;
    }
  }

}