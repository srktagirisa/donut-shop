import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DonutDetailComponent } from './components/donut-detail/donut-detail.component';
import { DonutsListComponent } from './components/donuts-list/donuts-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutDetailComponent,
    DonutsListComponent,
    NotFoundComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
