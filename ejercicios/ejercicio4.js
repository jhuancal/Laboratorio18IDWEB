var ejercicio4 = async function () {
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

ejercicio4();







