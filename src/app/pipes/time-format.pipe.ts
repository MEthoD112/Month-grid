import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number): string {
    const hours =  new Date(value).getUTCHours();
    const minutes = new Date(value).getUTCMinutes();
    return ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
  }

}
