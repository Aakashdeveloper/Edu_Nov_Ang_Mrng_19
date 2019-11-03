import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myTextUpper'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: string, kind: string, tex: string) {
        if (kind === 'upper') {
            value = value.toUpperCase() ;
        } else {
            value = value.toLowerCase();
        }
        return value;
    }
}
