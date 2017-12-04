import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { DeleteacherComponent } from './deleteacher/deleteacher.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddteacherComponent,
    DeleteacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
