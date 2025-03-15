document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("carName");
    const boton = document.getElementById("raceButton");


    const jugadoresEasyMap = [
        { nombre: "Player1", tiempo: 5.5, posicion: 1 },
        { nombre: "Player2", tiempo: 6.2, posicion: 2 },
        { nombre: "Player3", tiempo: 7.0, posicion: 3 }
    ];

    const jugadoresHardMap = [
        { nombre: "PlayerA", tiempo: 10.5, posicion: 1 },
        { nombre: "PlayerB", tiempo: 12.0, posicion: 2 },
        { nombre: "PlayerC", tiempo: 13.8, posicion: 3 }
    ];


    boton.addEventListener("click", (event) => {
        event.preventDefault();

        const vehiculoName = inputNombre.value.trim();
        const vehiculoSeleccionado = document.querySelector('input[name="chooseCar"]:checked');
        const mapaSeleccionado = document.querySelector('input[name="chooseMap"]:checked');

        if (!vehiculoSeleccionado || !mapaSeleccionado) {
            alert("Por favor, selecciona un tipo de vehículo y un mapa.");
            return;
        }

        const vehiculo = vehiculoSeleccionado.value;
        const mapa = mapaSeleccionado.value;

        let tiempoBase = 10;

        if (vehiculo === "mercedez") {
            tiempoBase *= 0.8;
        } else if (vehiculo === "bmw") {
            tiempoBase *= 1;
        }

        let jugadores;
        if (mapa === "hardMap") {
            tiempoBase *= 1.5;
            jugadores = jugadoresHardMap;
            mapaNombre = "mapa difícil";
        } else if (mapa === "easyMap") {
            tiempoBase *= 0.7;
            jugadores = jugadoresEasyMap;
            mapaNombre = "mapa fácil";
        }

        jugadores.push({ nombre: vehiculoName, tiempo: tiempoBase });
        jugadores.sort((a, b) => a.tiempo - b.tiempo);

        const posicionUsuario = jugadores.findIndex(jugador => jugador.nombre === vehiculoName) + 1;

        alert(`Tu vehículo: ${vehiculoName} (${vehiculo}) recorrió el ${mapaNombre} en ${tiempoBase.toFixed(2)} segundos y llegó en la posición numero ${posicionUsuario}.`);
        console.log(`Tu vehículo ${vehiculoName} (${vehiculo}) recorrió el ${mapaNombre} en ${tiempoBase.toFixed(2)} segundos y llegó en la posición numero${posicionUsuario}.`);
    });
});
