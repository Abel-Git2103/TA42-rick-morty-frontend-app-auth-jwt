import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TarjetaComponent } from './characters/tarjeta/tarjeta.component';
import { TarjetadetailsComponent } from './characters/tarjetadetails/tarjetadetails.component';
import { HomeComponent } from './home/home.component';
import { AdminGuardService } from './services/auth/admin-guard.service';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'tarjeta',
    component: TarjetaComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'tarjetadetails/:id',
    component: TarjetadetailsComponent,
    canActivate: [AdminGuardService, AuthGuardService],
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
