import { Routes } from '@angular/router';

import { Products } from './features/products/products';
import { HomeComponent } from './features/home/home';
import { Billing } from './features/billing/billing';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, 
  { path: 'products', component: Products },
  { path: 'billing', component: Billing }
];
