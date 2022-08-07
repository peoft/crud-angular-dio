import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printList',
  pure: false,
})
export class PrintListPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): string {
    let returnStr:string  = '';
    if (value.length) {
      value.forEach(val => {
        returnStr = returnStr + ' ' + val;
      })
    }
    return returnStr;
  }

}
