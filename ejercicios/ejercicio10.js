var ejercicio10 = function () {
    const regex = /<[^>]*>/g;

    const texto = "<h1>Hola</h1>";
    console.log(texto.replace(regex, ""));
};

ejercicio10();
