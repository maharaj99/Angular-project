import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './page/home/list/list.component';

const routes: Routes = [{path:'',loadChildren:()=> import('./page/home/home.module').then((data)=>data.HomeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
