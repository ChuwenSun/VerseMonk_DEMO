import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSuffix',
  standalone: true
})
export class NumberSuffixPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (value >= 1000) {
      return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return value.toString();
  }

}
