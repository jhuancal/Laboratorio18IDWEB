var ejercicio5 = function () {
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

