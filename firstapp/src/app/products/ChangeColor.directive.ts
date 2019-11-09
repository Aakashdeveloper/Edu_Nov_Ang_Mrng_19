import { Directive, ElementRef } from '@angular/core';

@Directive({
   selector: '[appChangeColor]'
})

export class ChangeColorDirective {
    constructor( Element: ElementRef) {
        Element.nativeElement.style.color = 'hotpink';
    }

}
