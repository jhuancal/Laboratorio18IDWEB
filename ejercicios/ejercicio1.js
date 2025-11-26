var ejercicio3 = function () {
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(respuesta => respuesta.json())
        .then(data => {
        console.log("Nombre:", data.name);
        console.log("Username:", data.username);
        console.log("Email:", data.email);
        })
        .catch(error => console.error("Error:", error));
};

document.getElementById("btn").addEventListener("click", ejercicio3);
