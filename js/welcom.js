let alertMensaje = document.getElementById("alertMensaje");
let btnEliminar = document.getElementById("btnEliminar");

window.addEventListener("load", function (event) {

    if (this.localStorage.getItem("nombre") != null) {
        alertMensaje.innerHTML = `Hola, <strong> ${this.localStorage.getItem("nombre")}<strong>, 
                              bienvenido de nuevo`;
    }
    alertMensaje.display = "block";

});

btnEliminar.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("nombre");
    location.href = "welcome.html";

});
