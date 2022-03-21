import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TarjetadetailsComponent } from './tarjetadetails/tarjetadetails.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'tarjeta',
    component: TarjetaComponent
  },
  {
    path: 'tarjetadetails/:id',
    component: TarjetadetailsComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
