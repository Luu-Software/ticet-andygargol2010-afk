import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';

/* Precios de los artistas en patacones 
ID_ARTISTA  | PRECIO
=============================
sabrina     |   1000
kgatlw      |    700
lali        |    500
magdalena   |    600
viagra      |    400
dillom      |    350
marilina    |    200
mugre       |    150

Descuentos:
CÓDIGO      | DESCUENTO
==============================
TIC10       |       10%
TIC20       |       20%
DARIO       |       50%
*/


const preciosArtistas: { [key: string]: number } = {
sabrina: 1000,
  kgatlw: 700,
  lali: 500,
  magdalena: 600,
  viagra: 400,
  dillom: 350,
  marilina: 200,
  mugre: 150,
};

const descuentos: { [key: string]: number } = {
  TIC10: 0.10,
  TIC20: 0.20,
  DARIO: 0.50,
};

const calcularTotal = (id: string, cantidad: number, codigoDescuento?: string): number => {
const precioBase = preciosArtistas[id] || 0; 
let total = precioBase * cantidad;
if (codigoDescuento && descuentos[codigoDescuento]) {const descuento = descuentos[codigoDescuento];
total -= total * descuento;
}

return total;
};


cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
const cantidadNum: number = Number(cantidad);
const precio: number = calcularTotal(id, cantidadNum, codigoDescuento);
enviarAlFrontend('mostrarPrecio', precio);
});

iniciar();
