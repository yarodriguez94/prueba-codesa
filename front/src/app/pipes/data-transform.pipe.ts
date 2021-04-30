import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataTransform'
})
export class DataTransformPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {    
    
    if ( value === '0'){

      return 'Seleccione >';
    
    }else if (value === '1'){
      
      return 'Activo' ;

    }else if (value === '2'){

      return 'Inactivo';

    }
       
  }

}
