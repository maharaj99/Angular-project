import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';

const routes: Routes = [{path:'',loadChildren:()=>import('./product/product.module').then((data)=>data.ProductModule)}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
