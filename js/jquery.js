$("#pulsa").click(cambiar);

function cambiar() {
    
    $("#frase").css("color","red");
    $("#frase").css("font-weight","bolder");
    $("#frase").css("text-transform","capitalized");
}

var enlace=document.createElement("a");
enlace.setAttribute("href","../pages/galeria.html");
enlace.innerText="Navegar";
document.body.appendChild(enlace);
