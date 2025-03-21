function enviar() {
    let ElementoNumerodeFruta = document.getElementById("numeroFruta");
    let Fruta = ElementoNumerodeFruta.value;

    switch (Fruta) {
        case "1":
            alert ("La fruta es Naranja y su precio es de: $20" )
            break;
        case "2":
            alert ("La fruta es Manzana y su precio es de: $15")
            break;
        case "3":
            alert ("La fruta es Banana y su precio es de: $25")
            break;
    }
}