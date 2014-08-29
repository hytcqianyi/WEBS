$(function(){
   $("#prev").click(function(){
      direction=0;//改变运动方向
      changeImage();//调用函数
  });
    $("#next").click(function(){
      direction=1;//改变运动方向
      changeImage();//调用函数
  });

});
var clicktimeSetting=1;//设定点击时间，即只有本次图片播放完成才可进行下一次播放,1为可用，0为不可用
var direction=1;//设定图片运动方向，1为向右，0为向左
function changeImage(){
  if(clicktimeSetting==1){//如果当前可以切换图片，则...
    clicktimeSetting=0;//开始切换前，先将其置为不可用，完成图片切换操作后再将其置为可用
    if(direction==1){//向右方向运动
      $("#ImageSlider li").eq(3).animate({"left":"1920px"},800);
      $("#ImageSlider li").eq(2).animate({"left":"960px"},800);
      $("#ImageSlider li").eq(1).animate({"left":"0"},800);//分别将前四张图片向右移动960px,即一张图片的距离
      $("#ImageSlider li").eq(0).animate({"left":"-960px"},800,function(){
            clicktimeSetting=1;//完成图片切换操作后再将其置为可用
      });
      var html=$("#ImageSlider li").eq(4).html();//先将最后一个元素中的内容取出来
      $("#ImageSlider li").eq(4).remove();//取出内容之后就将它移除
      $("#ImageSlider").prepend('<li class="slideItem" style="left:-1920px;">'+html+'</li>');
      //在父元素开头添加刚刚移除的元素，这就完成了元素的切换
    }else if(direction==0){//向左方向运动
      $("#ImageSlider li").eq(1).animate({"left":"-1920px"},800);//向左方向操作相同，这是向左移动960px
      $("#ImageSlider li").eq(2).animate({"left":"-960px"},800);
      $("#ImageSlider li").eq(3).animate({"left":"0"},800);
      $("#ImageSlider li").eq(4).animate({"left":"960px"},800,function(){
            clicktimeSetting=1;
      });
      var html=$("#ImageSlider li").eq(0).html();
      $("#ImageSlider li").eq(0).remove();//向左操作时移除的是第一个元素
      $("#ImageSlider").append('<li class="slideItem" style="left:1920px;">'+html+'</li>');
    }
  }
}