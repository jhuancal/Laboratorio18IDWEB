var ejercicio2 = async function () {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const data = await respuesta.json();
        console.log("Nombre:", data.name);
        console.log("Username:", data.username);
        console.log("Email:", data.email);
    } catch (error) {
        console.error("Error:", error);
    }
};

ejercicio2();
