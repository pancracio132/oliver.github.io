function mostrarMensaje(){

    document.getElementById("extra").innerHTML =
    "Tu dueña jamás dejará de amarte. Gracias por cada momento, por cada ronroneo y por todo el amor que regalaste. Siempre vivirás en su corazón. ";
}

function crearEstrella(){

    const estrella = document.createElement("div");

    estrella.classList.add("estrella");

    estrella.innerHTML = "⭐";

    estrella.style.left = Math.random()*100+"vw";

    estrella.style.fontSize = (Math.random()*15+10)+"px";

    estrella.style.animationDuration = (Math.random()*5+4)+"s";

    document.body.appendChild(estrella);

    setTimeout(()=>{
        estrella.remove();
    },9000);
}

setInterval(crearEstrella,300);
