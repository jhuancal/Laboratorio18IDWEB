var ejercicio3 = function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => respuesta.json())
        .then(usuarios => {
        usuarios.forEach(usuario => {
            console.log("Nombre:", usuario.name);
        });
        })
    .catch(error => console.error("Error:", error));
};

document.getElementById("btn").addEventListener("click", ejercicio3);


