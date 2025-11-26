const boton = document.getElementById("alternar");
const parrafo = document.getElementById("texto");

boton.addEventListener("click", () => {
    if (parrafo.textContent === "Texto original") {
        parrafo.textContent = "Texto cambiado";
    } else {
        parrafo.textContent = "Texto original";
    }
});
