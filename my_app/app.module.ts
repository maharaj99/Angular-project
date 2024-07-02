import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './page/home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    AppRoutingModule,
    BrowserModule,
     HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
