let chart = null; // Declara una variable global para la gráfica

// Función para graficar la función exponencial
function graficarFuncion(k, a, b, c) {
    const canvas = document.getElementById("grafica");
    const ctx = canvas.getContext("2d");

    // Calcula los puntos de la gráfica
    const data = [];
    for (let x = -10; x <= 10; x += 0.25) {
        const y = k * Math.pow(a, x + b) + c;
        data.push({ x, y });
    }

    // Configura la gráfica
    const config = {
        type: "line",
        data: {
            datasets: [
                {
                    label: "y",
                    data: data,
                    borderColor: "blue",
                    fill: true,
                },
            ],
        },
        options: {
            scales: {
                x: {
                    type: "linear",
                    position: "bottom",
                    min: -8, // Establece el valor mínimo del eje Y
                    max: 8,  // Establece el valor máximo del eje Y
                },
                y: {
                    type: "linear",
                    position: "top",
                    min: -8, // Establece el valor mínimo del eje Y
                    max: 8,  // Establece el valor máximo del eje Y
                },
            },
        },
    };

    // Si ya hay una instancia de la gráfica, destrúyela antes de crear una nueva
    if (chart) {
        chart.destroy();
    }

    // Crea la gráfica y almacena una referencia en la variable 'chart'
    chart = new Chart(ctx, config);
}

// Función para actualizar la gráfica cuando el usuario envía el formulario
function actualizarGrafica() {
    const k = parseFloat(document.getElementById("k").value);
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    graficarFuncion(k, a, b, c);

}
