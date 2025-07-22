import { Routes } from '@angular/router';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';


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
