// 1. Obtención del elemento canvas del DOM
var canvas = document.getElementById("canvas");

// 2. Obtención del contexto 2D para dibujar en el lienzo
var ctx = canvas.getContext("2d");

// 3. Establecer el color de relleno a un color RGB (por ejemplo, un tono de rojo)
ctx.fillStyle = "rgb(183, 32, 118)"; // Rojo puro en formato RGB

// 4. Dibujar un rectángulo con el color RGB en las coordenadas (10, 10) con un tamaño de 100x100 píxeles
ctx.fillRect(20, 20, 200, 200);
