const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 }
];

document.getElementById("generar").addEventListener("click", () => {
    const tabla = document.createElement("table");
    productos.forEach(p => {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${p.nombre}</td><td>${p.precio}</td>`;
        tabla.appendChild(fila);
    });
    document.getElementById("contenedor").appendChild(tabla);
});
