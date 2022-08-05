import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//most of the time you won't add to these arrays, if you use the CLI. it will be added automatically
@NgModule({
  declarations: [
    //every component you will make will be imported to this file then added here in this array
    //this will allow you to use the components everywhere without importing them like React
    AppComponent
  ],
  imports: [
    //every module you will make will be imported to this file then added here in this array
    BrowserModule
  ],
    //every service you will make will be imported to this file then added here in this array
  providers: [],
  //the component you want to bootstrap which is the root app component
  bootstrap: [AppComponent]
})
export class AppModule { }
