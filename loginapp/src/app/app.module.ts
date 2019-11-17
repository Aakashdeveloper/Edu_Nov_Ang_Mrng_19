import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register-form/registerForm.component';
import { RegisterService } from './register-form/register.service';
import { LoginService } from './login-form/login.service';
import { LoginComponent } from './login-form/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminRegisterComponent } from './AdminForm/adminForm.component';
import { ProfileService } from './profile/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AdminRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RegisterService,
    LoginService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
