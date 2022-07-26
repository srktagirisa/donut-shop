import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DonutDetailComponent } from './components/donut-detail/donut-detail.component';
import { DonutsListComponent } from './components/donuts-list/donuts-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'donuts', component: DonutsListComponent },
  { path: 'details/:id', component: DonutDetailComponent },
  { path: "", component: DonutsListComponent }, // the root path (homepage)
  { path: "**", component: NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
