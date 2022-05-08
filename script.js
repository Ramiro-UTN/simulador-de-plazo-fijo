//elemento "dialog"= datosOutput, se debe mostrar en pantalla al presionar "calcular"
const datosOutput = document.querySelector('.datos-output');
const calcularBtn = document.getElementById("calcular");
const cerrarBtn = document.querySelector('.cerrar');


//Abre el cuadro con los datos luego de presionar el botón "calcular"
calcularBtn.addEventListener('click', (e) => {

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let dias = document.getElementById('dias').value;
    let monto = document.getElementById('monto').value;

    //Si todos los campos  son completados de forma correcta, evito que se refresque la página y muestro los datos
    if (nombre !== "" && apellido !== "" && dias !== "" && monto !== "" && monto >= 1000 && dias >= 30) {

        e.preventDefault();
        datosOutput.showModal();
        MostrarDatos();

    }



})

cerrarBtn.addEventListener('click', () => {

    datosOutput.close();
})

function MostrarDatos() {

    //Muestro Nombre
    let nombre = document.getElementById('nombre').value;
    let outputNombre = document.querySelector('.output-nombre');
    outputNombre.textContent = nombre;

    //Muestro Apellido

    let apellido = document.getElementById('apellido').value;
    let outputApellido = document.querySelector('.output-apellido');
    outputApellido.textContent = apellido;

    //Muestro Monto inicial

    let monto = document.getElementById('monto').value;
    let outputMontoInicial = document.querySelector('.output-monto-inicial');
    outputMontoInicial.textContent = "$ " + monto;

    //Muestro cantidad de días a invertir

    let dias = document.getElementById('dias').value;
    let outputDias = document.querySelector('.output-dias');
    outputDias.textContent = dias;

    //Muestro monto final

    let outputMontoFinal = document.querySelector('.output-monto-final');
    let porcentaje = ValidarPorcentajeSegunDias(dias);
    let montoFinal = CalcularMontoFinal(monto, dias, porcentaje);
    outputMontoFinal.textContent = "$ " + montoFinal;


    //Muestro Datos de reinversion si hiciera falta

    //Verifico si está seleccionada la opcion "si"
    let reinversion = document.querySelector('#radio-opcion-si').checked;



    if (reinversion) {

        //Si elige reinvertir guardo los valores del monto inicial y monto final, de cada período, en un array
        let montos = [];

        //Guardo valores del primer período que habia calculado previamente
        montos.push([monto, montoFinal])

        //El bucle for llama a la funcíon CalcularMontoFinal para los tres períodos restantes, utilizando como monto incial 
        //el monto final del período anterior, luego guarda los valores en el array "montos".
        for (let i = 1; i < 4; i++) {

            montoFinal = CalcularMontoFinal(montoFinal, dias, porcentaje);

            // [montos[i - 1][1] es el lugar donde se guardó el valor del monto final del periodo anterior al que se está calculando
            // en esta iteración del for. El monto final de la iteración anterior se guarda como monto inicial de la nueva iteración.
            montos.push([montos[i - 1][1], montoFinal])
        }

        //Llamo función que se encarga de completar la tabla de reinversión.
        MostrarDatosReinversion(montos);
    } else {

        // Oculto tabla si el usuario no quiere reinvertir
        document.querySelector('.table-container').classList.add('hide');
    }

}

function CalcularMontoFinal(montoInicial, dias, porcentaje) {
    let montoFinal;

    montoFinal = +montoInicial + (+montoInicial * ((+dias / 360)) * (+porcentaje / 100));

    return montoFinal.toFixed(2);
}

function MostrarDatosReinversion(montos) {

    //Muestra la tabla
    document.querySelector('.table-container').classList.remove('hide');

    //Selecciono cada fila de la tabla por período
    let periodo1 = document.querySelectorAll('.periodo-uno td');
    let periodo2 = document.querySelectorAll('.periodo-dos td');
    let periodo3 = document.querySelectorAll('.periodo-tres td');
    let periodo4 = document.querySelectorAll('.periodo-cuatro td');

    //Completo cada celda con los datos guardados en el array que se pasó por parametro.
    for (let i = 1; i < periodo1.length; i++) {
        periodo1[i].textContent = "$ " + montos[0][i - 1];
        periodo2[i].textContent = "$ " + montos[1][i - 1];
        periodo3[i].textContent = "$ " + montos[2][i - 1];
        periodo4[i].textContent = "$ " + montos[3][i - 1];
    }


}

function ValidarPorcentajeSegunDias(dias) {
    let porcentaje;

    if (dias >= 30 && dias <= 60) porcentaje = 40;
    if (dias > 60 && dias <= 120) porcentaje = 45;
    if (dias > 120 && dias < 360) porcentaje = 50;
    if (dias >= 360) porcentaje = 65;

    return porcentaje;

}