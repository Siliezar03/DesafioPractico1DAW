const numFilas = document.getElementById("numFilas");
const numColumnas = document.getElementById("numColumnas");

const btnagregar = document.getElementById("btnagregar");
const btnreiniciar = document.getElementById("btnreiniciar");

let mayor = document.getElementById('mayor');
let menor = document.getElementById('menor');

let datos = document.getElementById('tabla');

btnagregar.addEventListener("click", () => {
    let contenido = "";

    const filas = numFilas.value;
    const columnas = numColumnas.value;

    //declaración de arreglos
    const arreglo = new Array(filas);

    for (var i = 0; i < filas; i++) {
        arreglo[i] = new Array(columnas);
    }

    for (var i = 0; i < filas; i++) {
        for (var j = 0; j < columnas; j++) {
            // console.log(i, j);
            arreglo[i][j] = Math.floor(Math.random() * 999);
        }
    }
    //obtener numeros mayor y menor
    let numeroMayor = 0;
    let numeroMenor = 1000;

    for (var i = 0; i < filas; i++) {
        for (var j = 0; j < columnas; j++) {

            if (arreglo[i][j] > numeroMayor) {
                numeroMayor = arreglo[i][j];
            }

            if (arreglo[i][j] < numeroMenor) {
                numeroMenor = arreglo[i][j];
            }
        }
    }

    with (document) {
        contenido += "<table class='table table-striped'>\n\t<tbody>\n";

        for (var i = 0; i < filas; i++) {
            contenido += "\t\t<tr>\n";
            for (var j = 0; j < columnas; j++) {
                if (numeroMayor == arreglo[i][j]) {
                    contenido += "\t\t\t<th scope='col' style='background:yellow'>" + arreglo[i][j] + "</th>\n";
                } else if (numeroMenor == arreglo[i][j]) {
                    contenido += "\t\t\t<th scope='col' style='background:green'>" + arreglo[i][j] + "</th>\n";
                } else {
                    contenido += "\t\t\t<th scope='col'>" + arreglo[i][j] + "</th>\n";
                }
            }
            contenido += "\t\t</tr>\n";
        }

        contenido += "\t</tbody>\n</table>\n";

    }

    datos.innerHTML = contenido;

    mayor.innerText = "El numero mayor es: " + numeroMayor;
    menor.innerText = "El numero menor es: " + numeroMenor;

});

btnreiniciar.addEventListener("click", () => {
    numFilas.value = 1;
    numColumnas.value = 1;

    mayor.innerText = "El numero mayor es: ";
    menor.innerText = "El numero menor es: ";

    datos.innerHTML = "";
});