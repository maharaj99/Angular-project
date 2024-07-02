import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import {FormsModule, ReactiveFormsModule}from '@angular/forms';



@NgModule({
  declarations: [
    AddComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductModule { }
