import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/myDiscountPipe';
import { ProductSearchPipe } from './products/myfilter.pipe';
import { ProductService } from './products/product.service';
import { StarComponent } from './shared/star.component';
import { ChangeColorDirective } from './products/ChangeColor.directive';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderpipePipe } from './orders/orderpipe.pipe';

@NgModule({
    // All module will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'product', component: ProductComponent},
            {path: 'order', component: OrdersComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'}
        ])
    ],

    // All Component/pipe/directive
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearchPipe,
        StarComponent,
        ChangeColorDirective,
        OrdersComponent,
        OrderpipePipe
    ],

    // All Services
    providers: [
        ProductService
    ],

    // Only main component
    bootstrap: [
        AppComponent
    ]

})

export class AppsModule {

}
