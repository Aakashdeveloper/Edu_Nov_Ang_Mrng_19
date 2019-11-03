import { Pipe, PipeTransform} from '@angular/core';
import { IProduct} from './product.model';

@Pipe({
    name: 'productSearch'
})


export class ProductSearchPipe implements PipeTransform {
    transform(value: IProduct[], userInput: string) {
        // Convert all user text in lower case
        userInput = userInput ? userInput.toUpperCase() : null;
        // Return value accoridng to user input
        return userInput ? value.filter((product) =>
            ((product.productName.toUpperCase().indexOf(userInput) !== -1) ||
             (product.productCode.toUpperCase().indexOf(userInput) !== -1)
            )
        ) : value;
    }
}



/*
var b = [0,1,2,3]
//only return values for which condition is true
b.filter((data) => {return data*1})
[1,2,3]
*/
