let app = Vue.createApp({
    data() {
        return {
            nombre: '',
            apellido: '',
            montoInicial: null,
            montoInicialFijo: null,
            dias: null,
            reinvertir: true,
            abrirVentana: false,
            porcentaje: null,
            periodo: 1,
            periodosReinversion: [],
            montoFinal: null

        }
    },
    methods: {
        mostrarDatos(e) {

            if (this.nombre && this.apellido !== "" && this.dias !== "" && this.montoInicial !== "" && this.montoInicial >= 1000 && this.dias >= 30) {

                e.preventDefault();
                this.ValidarPorcentajeSegunDias();
                this.calcularMontoFinal();
                if (this.reinvertir) {
                    for (let i = 0; i < 4; i++) {
                        this.reinversion();
                    }

                }

                this.abrirVentana = true;

            }

        },
        cerrarVentana() {
            this.abrirVentana = false;

            this.periodosReinversion = [];
            this.periodo = 1;
            this.montoInicial = null;
            this.montoInicialFijo = null;
            this.dias = null;

        },
        ValidarPorcentajeSegunDias() {

            if (this.dias >= 30 && this.dias <= 60) this.porcentaje = 40;
            if (this.dias > 60 && this.dias <= 120) this.porcentaje = 45;
            if (this.dias > 120 && this.dias < 360) this.porcentaje = 50;
            if (this.dias >= 360) this.porcentaje = 65;
        },
        reinversion() {

            let montoFinal = this.montoInicial + (this.montoInicial * ((this.dias / 360)) * (+this.porcentaje / 100));

            this.periodosReinversion.push({ nroPeriodo: this.periodo++, inicial: this.montoInicial, final: montoFinal })
            this.montoInicial = montoFinal;



        },
        calcularMontoFinal() {

            let montoFinal = this.montoInicial + (this.montoInicial * ((this.dias / 360)) * (+this.porcentaje / 100));
            this.montoInicialFijo = this.montoInicial;
            this.montoFinal = montoFinal.toFixed(2);
        }

    }
}).mount('#app')


