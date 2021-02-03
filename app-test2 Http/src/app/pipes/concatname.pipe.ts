import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatname',
})
export class ConcatnamePipe implements PipeTransform {
  transform(name: object): string {
    const fullName: string = name.title + ' ' + name.first + ' ' + name.last;
    return fullName;
  }
}
