const numLibros = document.getElementById("numLibros");
const numCuadernos = document.getElementById("numCuadernos");
const numPlumas = document.getElementById("numPlumas");

const btnejecutar = document.getElementById("btnejecutar");
const btnreiniciar = document.getElementById("btnreiniciar");

let txtTotalLibros = document.getElementById('txtTotalLibros');
let txtTotalCuadernos = document.getElementById('txtTotalCuadernos');
let txtTotalPlumas = document.getElementById('txtTotalPlumas');
let txtTotalFinal = document.getElementById('txtTotalFinal');

btnejecutar.addEventListener("click", () => {

    const precioLibro = 100;
    const precioCuaderno = 15.50;
    const precioPluma = 2.35;

    const libros = numLibros.value;
    const cuadernos = numCuadernos.value;
    const plumas = numPlumas.value;

    let totalLibros = 0;
    let totalCuadernos = 0;
    let totalPlumas = 0;

    let totalFinal = 0;

    totalLibros = libros * precioLibro;
    totalCuadernos = cuadernos * precioCuaderno;
    totalPlumas = plumas * precioPluma;

    totalFinal = totalLibros + totalCuadernos + totalPlumas;

    txtTotalLibros.innerText = "$ " + totalLibros.toFixed(2);
    txtTotalCuadernos.innerText = "$ " + totalCuadernos.toFixed(2);
    txtTotalPlumas.innerText = "$ " + totalPlumas.toFixed(2);
    txtTotalFinal.innerText = "$ " + totalFinal.toFixed(2);

});


btnreiniciar.addEventListener("click", () => {
    numLibros.value = 0;
    numCuadernos.value = 0;
    numPlumas.value = 0;

    txtTotalLibros.innerText = "$";
    txtTotalCuadernos.innerText = "$";
    txtTotalPlumas.innerText = "$";
    txtTotalFinal.innerText = "$";


});