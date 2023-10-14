document.addEventListener("DOMContentLoaded", function() {
  const calculateButton = document.getElementById("calculate");
  calculateButton.addEventListener("click", calculateEquation);
});

function calculateEquation() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  const xValues = [];
  const yValues = [];
  for (let x = -10; x <= 10; x += 0.2) {
      xValues.push(x);
      const y = a * x * x + b * x + c;
      yValues.push(y);
  }

  updateChart(xValues, yValues);
}


var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
      labels: [], // Valores x
      datasets: [
          {
              label: "y",
              data: [], // Valores y
              borderColor: "rgba(75, 192, 192, 1)",
              fill: true,
          },
      ],
  },
  options: {
      scales: {
          x: {
              type: "linear",
              position: "bottom",
              min: -10, // Establece el valor mínimo del eje Y
              max: 10, // Establece el valor máximo del eje Y
          },
          y: {
              min: -10, // Establece el valor mínimo del eje Y
              max: 10, // Establece el valor máximo del eje Y
          },
      },
  },
});

// Función para actualizar el gráfico
function updateChart(xValues, yValues) {
  myChart.data.labels = xValues;
  myChart.data.datasets[0].data = yValues;
  myChart.update();
}

