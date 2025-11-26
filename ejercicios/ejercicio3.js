var ejercicio5 = function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => respuesta.json())
        .then(usuarios => {
        usuarios.forEach(usuario => {
            console.log("Nombre:", usuario.name);
        });
        })
    .catch(error => console.error("Error:", error));
};



var ejercicio7 = function () {
    document.getElementById("btnCargar").addEventListener("click", () => {
        fetch("https://jsonplaceholder.typicode.com/users/2")
            .then(respuesta => respuesta.json())
            .then(data => {
                const info = document.getElementById("info");
                info.innerHTML = `
                <p>Nombre: ${data.name}</p>
                <p>Email: ${data.email}</p>
                <p>Ciudad: ${data.address.city}</p>
                `;
            })
        .catch(error => console.error("Error:", error));
    });
};


