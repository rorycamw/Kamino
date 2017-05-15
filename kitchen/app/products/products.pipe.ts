

import {Pipe, PipeTransform} from "@angular/core";
import {Iproduct} from "./products";

@Pipe({
    name: 'productFilter'
})

export class productFilterPipe implements PipeTransform {

    transform(value: Iproduct[], filterBy: string): Iproduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: Iproduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}