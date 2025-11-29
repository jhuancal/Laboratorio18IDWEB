var ejercicio12 = function () {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;

    console.log(regex.test("29/11/2025"));
    console.log(regex.test("2025/11/29"));
};

ejercicio12();
