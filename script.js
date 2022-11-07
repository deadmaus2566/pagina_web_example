function captura(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    if (nombre == "") {
        alert("El campo nombre no puede estar vacío");
        document.getElementById("nombre").focus();
    }else{
        if (apellido == "") {
        alert("El campo Apellido no puede estar vacío");
        document.getElementById("email").focus();
    }else{
        if (telefono == "") {
        alert("El campo telefono no puede estar vacío");
        document.getElementById("telefono").focus();
    }else{
        if (email == "") {
        alert("El campo Email no puede estar vacío");
        document.getElementById("pelicula").focus();
    }else{
        console.log("Nombre: " + nombre + " Apellido: " + apellido + " Telefono: " + telefono + " Email: " + email);
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("email").value = "";
        document.getElementById("nombre").focus();
    }
    }
    }
    }
}