let datos = {
    fetchDatos: function () {
        fetch('https://api.gael.cloud/general/public/sismos')
        .then((res) => res.json())
        .then(data => this.mostrarDatos(data))
    },

    mostrarDatos: function (data) {

        datos_a = data[0];
        const { Fecha, RefGeografica, Profundidad, Magnitud } = datos_a;
        document.getElementById("Fecha_").innerText = Fecha;
        document.getElementById("RefGeografica_").innerText = RefGeografica;
        document.getElementById("Profundidad_").innerText = Profundidad;
        document.getElementById("Magnitud_").innerText = Magnitud + " °"; 
    }

}

datos.fetchDatos();


