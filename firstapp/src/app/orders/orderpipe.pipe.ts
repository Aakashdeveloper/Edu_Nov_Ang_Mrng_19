import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderpipe'
})
export class OrderpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
