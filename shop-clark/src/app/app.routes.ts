import { Routes } from '@angular/router';
import { DasboardComponent } from './dasboard/dasboard.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  {path: '',
    component:DasboardComponent
  },
  {
    path:"dashboard",
    component:DasboardComponent,
    children:[
    {
      path:"home",
      component :HomeComponent
    },
    {
      path:"products",
      component:ProductsComponent
    }]
  },

];
