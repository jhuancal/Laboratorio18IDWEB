var ejercicio6 = async function () {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await respuesta.json();
        usuarios.forEach(usuario => {
            console.log("Nombre:", usuario.name);
        });
    } catch (error) {
        console.error("Error:", error);
    }
};




var ejercicio8 = function () {
    document.getElementById("btnCargar").addEventListener("click", async () => {
        try {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/2");
            const data = await respuesta.json();
            const info = document.getElementById("info");
            info.innerHTML = `
                <p>Nombre: ${data.name}</p>
                <p>Email: ${data.email}</p>
                <p>Ciudad: ${data.address.city}</p>
            `;
        } catch (error) {
            console.error("Error:", error);
        }
    });
};




