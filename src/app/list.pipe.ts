import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'list'
})
export class ListPipe implements PipeTransform {

  transform(value: any): any {

    const result = [];

    let todayDate = new Date().toISOString().slice(5, 10);

    for (const i of value) {

      if (i['dob'].slice(5, 10) == todayDate) {

        result.push(i);

      }

    }

    return result;

  }
}
