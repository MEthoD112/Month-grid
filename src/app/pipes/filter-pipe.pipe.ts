import { Pipe, PipeTransform } from '@angular/core';
import { DataInterface } from "../interfaces/data.interface";

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(values: DataInterface[], time: number): DataInterface[] {
    return values.filter((value: DataInterface) => (value.time % time) === 0);
  }

}
