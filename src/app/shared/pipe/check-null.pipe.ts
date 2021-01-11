import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkNull'
})
export class CheckNullPipe implements PipeTransform {

  transform(value: any, arg: boolean = false): any {
    if (value == null){
      if (arg){
        return 'Information Not Available'
      }
      else{
        return 'Null' ;
      }
    }
    else{
      return value ;
    }
  }

}
