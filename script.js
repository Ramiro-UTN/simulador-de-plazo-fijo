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

    }



})

cerrarBtn.addEventListener('click', () => {

    datosOutput.close();
})

