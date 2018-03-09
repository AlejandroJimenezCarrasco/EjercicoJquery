



$("#carrete").ready(function(){
    $("#carrete")
    .hide()
});


$(document).on("click", function(){
    $("#carrete")
    .show()

    $("h1")
    .hide()
  
    
});





$("#carrete img").on("mouseover", function(){
    $(this).attr('width',"300")
});

$("#carrete img").on("mouseout", function(){
    $(this).attr('width',"250")
});

/*







$("#elem1").on("mouseover", function(){
    $("img").attr("src" , "img/arbol.jpg");
    $("#elem1").addClass("destacar");
 console.log("Algo ha ocurrido");
});

$("#elem1").on("mouseout", function(){
    $("img").attr("src" , "img/blanco.jpg");
    $("#elem1").removeClass("destacar");
 console.log("Algo ha ocurrido");
});*/
