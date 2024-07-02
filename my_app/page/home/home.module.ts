import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ListComponent } from './list/list.component';
import { List2Component } from './list2/list2.component';
import {FormsModule, ReactiveFormsModule}from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ListComponent,
    List2Component
  ],
  imports: [

    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
   FormsModule
  ]
})
export class HomeModule { }
