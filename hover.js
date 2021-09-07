$(document).ready(function(){
  $("li").mouseover(function(){
    $("li").css("color", "red");
  });
  $("li").mouseout(function(){
    $("li").css("color", "black");
  });
});
