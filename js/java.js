let txtNombre = document.getElementById("txtNombre");
let btnGuardar = document.getElementById("btnGuardar");
let alertValidacion = document.getElementById("alertValidacion");

btnGuardar.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidacion.innerHTML = "";
    alertValidacion.style.display = "none";
    if (txtNombre.value.lenght < 3) {
        alertValidacion.innerHTML = "El nombre no es valido";
        alertValidacion.style.display = "block";
        return false;
    }
    localStorage.setItem("nombre", txtNombre.value);
}); 