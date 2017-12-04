import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { Left1Component } from './admin/left1/left1.component';
import { Left2Component } from './admin/left2/left2.component';
import { Left3Component } from './admin/left3/left3.component';
import { Center1Component } from './admin/center1/center1.component';
import { AddteachComponent } from './admin/addteach/addteach.component';
import { DeleteachComponent } from './admin/deleteach/deleteach.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Left1Component,
    Left2Component,
    Left3Component,
    Center1Component,
    AddteachComponent,
    DeleteachComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
