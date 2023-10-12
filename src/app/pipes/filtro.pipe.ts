import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[] | Hero[], texto: string = '', columna: string = 'title' ): any {

    console.log('el texto a buscar es: ', texto);
    console.log('la columna a buscar es: ', columna);

    if (texto === ''){
      return arreglo;
    }

    if (!texto){
      return arreglo;
    }

    const newArreglo = arreglo.filter(item => item[columna].toLowerCase().includes(texto.toLowerCase()))


    return newArreglo
  }

}
