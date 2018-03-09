

$("#anuncio").ready(function(){
    $("#anuncio").text("YIIIIIIIIIIII")
    .hide()
    .fadeIn(3000)
    .width(400)
    .height(499)
 console.log("Algo ha ocurrido");
});

$("#anuncio").on("click", function(){
    let colores = ["blue", "yellow", "orange", "red", "grey", "blue", "purple"]
    let color = colores[Math.floor(Math.random() * colores.length)];

    $("#anuncio").css("background-color", color)
    
});




