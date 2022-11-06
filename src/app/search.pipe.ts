import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filter:any): any {
    console.log(filter)
    const filteredValue=[]
    if(filter==""){
      return value;
   }
   return value.filter((ele:any)=> ele.empName.toLowerCase().startsWith(filter.toLowerCase()))
  }
  }
  


