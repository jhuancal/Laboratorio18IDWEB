var ejercicio9 = function () {
    const regex = /https:\/\/[^\s]+/g;

    const texto = "Url seguro: https://google.com , url inseguro http://google.com";
    console.log(texto.match(regex));
};

ejercicio9();
