let estudiantes = [];
let notas = [];

fetch('estudiantes.json')
    .then(res => res.json())
    .then(data => {
        estudiantes = data;
    });


function registrarNota(nombre) {
    let nota;                                                                                                                           
    while (true) {
        let entrada = prompt(`¿Cuál es la nota de ${nombre}? (0 a 100)`);
        nota = parseInt(entrada);
        if (nota >= 0 && nota <= 100) {
            break;
        }
        alert("Por favor, ingresa un número válido entre 0 y 100.");
    }
    return nota;
}

function registrarNotas() {
    notas = [];
    for (let estudiante of estudiantes) {
        let nombre = estudiante.nombre;
        let nota = registrarNota(nombre);
        let clasificacion = "";

        if (nota >= 90 && nota <= 100) {
            clasificacion = "Excelente";
        } else if (nota >= 80 && nota <= 89) {
            clasificacion = "Buena";
        } else if (nota >= 70 && nota <= 79) {
            clasificacion = "Aprobada";
        } else {
            clasificacion = "Reprobada";
        }

        notas.push({
            nombre: nombre,
            nota: nota,
            clasificacion: clasificacion
        });
    }
    mostrarLista();
}


function mostrarLista() {
    const contenedor = document.getElementById('lista-estudiantes');
    contenedor.innerHTML = "";
    notas.forEach(est => {
        const div = document.createElement('div');
        div.textContent = `${est.nombre} - Nota: ${est.nota} - Clasificación: ${est.clasificacion}`;
        contenedor.appendChild(div);
    });
}


function generarResumen() {
    if (notas.length === 0) {
        alert("Primero debes registrar las notas.");
        return;
    }

    let aprobados = notas.filter(est => est.nota >= 70).length;
    let reprobados = notas.filter(est => est.nota < 70).length;
    let suma = notas.reduce((acc, est) => acc + est.nota, 0);
    let promedio = (suma / notas.length).toFixed(2);
    let notasSolo = notas.map(est => est.nota);
    let max = Math.max(...notasSolo);
    let min = Math.min(...notasSolo);

    const resumenDiv = document.getElementById('resumen');
    resumenDiv.innerHTML = `
        <h3>Resumen General</h3>
        <p>Aprobados: ${aprobados}</p>
        <p>Reprobados: ${reprobados}</p>
        <p>Promedio general: ${promedio}</p>
        <p>Nota más alta: ${max}</p>
        <p>Nota más baja: ${min}</p>
    `;
}
