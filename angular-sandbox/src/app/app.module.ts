import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    //every component you will made will be imported to this file then added here in this array
    //this will allow you to use the components everywhere without importing them like React
    AppComponent
  ],
  imports: [
    //every module you will made will be imported to this file then added here in this array
    BrowserModule
  ],
    //every servvicd you will made will be imported to this file then added here in this array
  providers: [],
  //the component you want to bootstrap which is the root app component
  bootstrap: [AppComponent]
})
export class AppModule { }
