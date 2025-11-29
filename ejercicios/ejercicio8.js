var ejercicio8 = function () {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    console.log(regex.test("Arequipa123."));
    console.log(regex.test("arequipa"));
};

ejercicio8();
