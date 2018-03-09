$("#mensaje_img1").ready(function(){
    $("mensaje_img1")
    .hide()
});




$("#imagen1").hover(function(){
  console.log("Algo ha ocurrido");
$("#mensaje_img1").show()
}, function(){
    $("#mensaje_img1").hide()
    console.log("Otra cosa ha ocurrido");
});