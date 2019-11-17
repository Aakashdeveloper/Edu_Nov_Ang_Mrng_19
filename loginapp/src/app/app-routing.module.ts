import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register-form/registerForm.component';
import { LoginComponent } from './login-form/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminRegisterComponent } from './AdminForm/adminForm.component';
import { LoginGaurdService } from './login-gaurd.service';
import { AdminGaurdService } from './admin-gaurd.service';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', canActivate: [LoginGaurdService], component: ProfileComponent},
  {path: 'admin', canActivate: [AdminGaurdService], component: AdminRegisterComponent},
  {path: '',  redirectTo: 'register', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AdminGaurdService, LoginGaurdService ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
