import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProductComponent } from './products/product.component';

@NgModule({
    // All module will declare here
    imports: [
        BrowserModule,
        FormsModule
    ],

    // All Component/pipe/directive
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent
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
