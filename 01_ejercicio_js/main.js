$("#img1").on("mouseover", function(){
    $("#img1").attr("src" , "img/rio.jpg");
 console.log("Algo ha ocurrido");
});

$("#img1").on("mouseout", function(){
    console.log("Algo ha ocurrido");
    $("#img1").attr("src" , "img/arbol.jpg");
});