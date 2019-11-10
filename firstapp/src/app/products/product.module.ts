import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-detail.component';
import { MyUpperPipe } from './myUpper.pipe';
import { DiscountPipe } from './myDiscountPipe';
import { ProductSearchPipe } from './myfilter.pipe';
import { ChangeColorDirective } from './ChangeColor.directive';
import { ProductService } from './product.service';
import { RouterGaurds } from './product.routerGaurd';




@NgModule({
    imports: [
        AppRoutingModule,
        SharedModule
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearchPipe,
        ChangeColorDirective,
        ProductDetailsComponent
    ],
    providers: [
        ProductService,
        RouterGaurds
    ]
})

export class ProductModule {

}
