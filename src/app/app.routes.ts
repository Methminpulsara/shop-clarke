import { Routes } from '@angular/router';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DasboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/category/:category',  // ✅ moved 'category' to separate segment
        component: ProductsComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,    // ✅ now no conflict
      },
    ],
  },
];
