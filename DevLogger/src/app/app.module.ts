//core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { LogsComponent } from './components/logs/logs.component';

//services
import { LogService } from './services/log.service';
@NgModule({
  //components
  declarations: [
    AppComponent,
    NavbarComponent,
    LogFormComponent,
    LogsComponent,
  ],
  //modules
  imports: [BrowserModule],
  //services
  providers: [LogService],
  //root app component to bootstrap
  bootstrap: [AppComponent],
})
export class AppModule {}
