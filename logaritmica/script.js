function graficarFuncion() {
    // Obtener los valores de k, a, b y c desde los campos de entrada
    const k = parseFloat(document.getElementById("k").value);
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    // Realizar las validaciones
    if (k === 0) {
        alert("El valor de 'k' no puede ser igual a 0.");
        return;
    }

    if (a <= 0 || a === 1) {
        alert("El valor de 'a' debe ser mayor que 0 y distinto de 1.");
        return;
    }

    // Crear un arreglo de valores x en el rango de -10 a 10
    const xValues = [];
    for (let x = -10; x <= 10; x += 0.5) {
        xValues.push(x);
    }

    // Calcular los valores de y utilizando la función logarítmica
    const yValues = xValues.map(x => k * Math.log(a * (x + b)) + c);

    // Obtener el elemento canvas
    const canvas = document.getElementById('grafica');
    
    // Eliminar la gráfica anterior si existe
    if (window.myChart) {
        window.myChart.destroy();
    }

    // Crear un objeto de datos para la gráfica
    const data = {
        labels: xValues,
        datasets: [{
            label: 'Función Logarítmica',
            data: yValues,
            borderColor: 'blue',
            borderWidth: 2,
            fill: true
        }]
    };

    // Obtener el elemento canvas y crear la gráfica
    const ctx = canvas.getContext('2d');
    window.myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    min: -2, // Valor mínimo en el eje x
                    max: 10,  // Valor máximo en el eje x
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    min: -2, // Valor mínimo en el eje y
                    max: 10,  // Valor máximo en el eje y
                }
            }
        }
    });
}
