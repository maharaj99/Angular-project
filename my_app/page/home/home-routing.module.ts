import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { List2Component } from './list2/list2.component';

const routes: Routes = [{path:'',component:ListComponent},{path:'list2',component:List2Component}];
// {path:'',component:ListComponent},{path:'list2',component:List2Component}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
