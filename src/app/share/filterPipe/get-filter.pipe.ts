import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFilter'
})
export class GetFilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(function (data: string) {
      // return JSON.stringify(data).includes(args);
      return JSON.stringify(data).toLowerCase().indexOf(args) > -1;
    });
  }

}
