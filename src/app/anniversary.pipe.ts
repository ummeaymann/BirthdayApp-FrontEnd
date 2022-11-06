import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anniversary'
})
export class AnniversaryPipe implements PipeTransform {

  transform(value: any): any {

    const result = [];

    let todayDate = new Date().toISOString().slice(5, 10);

    for (const i of value) {

      if (i['doj'].slice(5, 10) == todayDate) {

        result.push(i);

      }

    }

    return result;

  }
}
