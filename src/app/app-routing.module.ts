import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { OtherInfoComponent } from './other-info/other-info.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: 'info/:prod', component: ProductInfoComponent},
  {path: 'book/:menuItem', component: OtherInfoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
