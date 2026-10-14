let totalCompra = 150000;
let esCliente = true;
let descuento = 0;

if (totalCompra > 100000) {
    if (esCliente) {
        descuento = 0.20;
    } else {
        descuento = 0.10;
    }
} else {
    if (esCliente) {
        descuento = 0.05;
    } else {
        descuento = 0;
    }
}

let valorDescuento = totalCompra * descuento;
let totalFinal = totalCompra - valorDescuento;

console.log("Descuento aplicado: " + (descuento * 100) + "%");
console.log("Valor del descuento: $" + valorDescuento);
console.log("Total a pagar: $" + totalFinal);