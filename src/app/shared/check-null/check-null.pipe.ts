import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkNull'
})

export class CheckNullPipe implements PipeTransform {

  transform(value: any ): any {
    if (value == null){
      return 'None' ;
    }
    else{
      return value ;
    }
  }

}
