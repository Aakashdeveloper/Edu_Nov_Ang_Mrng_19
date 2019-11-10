import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';
import { OrderModule } from './orders/order.module';
import { NotFoundComponent } from './shared/notFound.component';

@NgModule({
    // All module will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ProductModule,
        OrderModule
    ],

    // All Component/pipe/directive
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent
    ],

    // All Services
    providers: [],

    // Only main component
    bootstrap: [
        AppComponent
    ]

})

export class AppsModule {

}
