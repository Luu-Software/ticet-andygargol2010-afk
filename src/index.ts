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

// COMPLETAR: Implementar la función calcularTotal que reciba el id del artista, la cantidad de entradas y un código de descuento (opcional) y devuelva el precio total a pagar en patacones.
function calcularTotal(id: string, cantidad: number, codigoDescuento?: string): number {
  let precio: number = 0;
  if(id === 'sabrina') {
    precio = 1000 * cantidad;
  }
  else if(id === 'kgatlw') {
    precio = 700 * cantidad;
  }
  else if(id === 'lali') {
    precio = 500 * cantidad;
  }
  else if(id === 'magdalena') {
    precio = 600 * cantidad;
  }
  else if(id === 'viagra') {
    precio = 400 * cantidad;
  }
  else if(id === 'dillom') {
    precio = 350 * cantidad;
  }
  else if(id === 'marilina') {
    precio = 200 * cantidad;
  }
  else if(id === 'mugre') {
    precio = 150 * cantidad;
  }
  else {
    console.log('ID de artista no válido');
  }

  if(codigoDescuento === 'TIC10') {
    precio = precio * 0.9;
  }
  else if(codigoDescuento === 'TIC20') {
    precio = precio * 0.8;
  }
  else if(codigoDescuento === 'DARIO') {
    precio = precio * 0.5;
  }

  return precio;
}


cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
  let cantidadNum: number = Number(cantidad);
  let precio: number = calcularTotal(id, cantidadNum, codigoDescuento);
  enviarAlFrontend('mostrarPrecio', precio);
});

iniciar();