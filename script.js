//elemento "dialog", se va a mostrar en pantalla al presionar "calcular"
const datosOutput = document.querySelector('.datos-output');
const calcularBtn = document.getElementById("calcular");
const cerrarBtn = document.querySelector('.cerrar');


//Abre el cuadro con los datos luego de presionar el botón "calcular"
calcularBtn.addEventListener('click', (e) => {
    e.preventDefault();
    datosOutput.showModal();
})

cerrarBtn.addEventListener('click', () => {

    datosOutput.close();
})

