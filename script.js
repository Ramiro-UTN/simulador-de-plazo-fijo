let app = Vue.createApp({
    data() {
        return {
            nombre: '',
            apellido: '',
            montoInicial: null,
            dias: null,
            reinvertir: true,
            abrirVentana: false,
            porcentaje: null,





        }
    },
    methods: {
        mostrarDatos(e) {

            if (this.nombre && this.apellido !== "" && this.dias !== "" && this.montoInicial !== "" && this.montoInicial >= 1000 && this.dias >= 30) {

                e.preventDefault();
                this.ValidarPorcentajeSegunDias();

                this.abrirVentana = true;

            }

        },
        cerrarVentana() {
            this.abrirVentana = false;
        },
        ValidarPorcentajeSegunDias() {
            console.log('dias:', this.dias + 'monto:', this.montoInicial)
            if (this.dias >= 30 && this.dias <= 60) this.porcentaje = 40;
            if (this.dias > 60 && this.dias <= 120) this.porcentaje = 45;
            if (this.dias > 120 && this.dias < 360) this.porcentaje = 50;
            if (this.dias >= 360) this.porcentaje = 65;
            console.log('dias: ', this.dias + 'monto: ', this.montoInicial, 'porcentaje: ' + this.porcentaje)

        }

    },
    computed: {

        calcularMontoFinal() {

            console.log('dias: ', this.dias + 'monto: ', this.montoInicial, 'porcentaje: ' + this.porcentaje);

            let montoFinal = this.montoInicial + (this.montoInicial * ((this.dias / 360)) * (+this.porcentaje / 100));

            return montoFinal.toFixed(2);
        }

    }
}).mount('#app')


/* 
function MostrarDatos() {


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

} */