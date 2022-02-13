let datos = {
    fetchDatos: function () {
        fetch("https://api.xor.cl/sismo/recent?")
        .then((res) => res.json())
        .then(data => this.mostrarDatos(data))
    },

    mostrarDatos: function (data) {
        datos_ultimo = data.events[0];
        const { local_date, geo_reference, depth} = datos_ultimo;        
        const { value } = datos_ultimo.magnitude;

        document.getElementById("local_date_").innerText = local_date;
        document.getElementById("geo_reference_").innerText = geo_reference;
        document.getElementById("depth_").innerText = depth;
        document.getElementById("value_").innerText = value + " °"; 


    }

}

datos.fetchDatos();


