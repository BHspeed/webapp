import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import Backendless from 'backendless';
import { environment } from '../environments/environment';
import { PersonsListComponent } from './persons-list/persons-list.component';

Backendless.initApp(environment.backendless.APP_ID, environment.backendless.API_KEY);
@NgModule({
  declarations: [
    AppComponent,
    PersonsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//app.module.ts

