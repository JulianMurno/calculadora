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
  for (let x = -10; x <= 10; x += 0.04) {
      xValues.push(x);
      const y = a * x * x + b * x + c;
      yValues.push(y);
  }

  updateChart(xValues, yValues);

  if (a === 0) {
      if (b === 0) {
          document.getElementById("result").textContent = "La ecuación no tiene soluciones reales.";
      } else {
          const x = -c / b;
          document.getElementById("result").textContent = `x = ${formatFraction(x)}`;
      }
  } else {
      const discriminant = Math.pow(b, 2) - 4 * a * c;

      if (discriminant > 0) {
          const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
          const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
          document.getElementById("result").textContent = `x1 = ${formatFraction(x1)}, x2 = ${formatFraction(x2)}`;
      } else if (discriminant === 0) {
          const x = -b / (2 * a);
          document.getElementById("result").textContent = `x = ${formatFraction(x)}`;
      } else {
          const realPart = -b / (2 * a);
          const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
          document.getElementById("result").textContent = `x1 = ${formatFraction(realPart)}, x2 = ${formatFraction(-imaginaryPart)}`;
      }
  }
}

function formatFraction(value) {
  return value.toFixed(3); // Redondea a tres cifras decimales
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
              fill: false,
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
              max: 15, // Establece el valor máximo del eje Y
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

Chart.defaults.backgroundColor = '#33D1FF';
