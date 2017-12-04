//import {RouterConfig} from"@angular/router";

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Left1Component} from './admin/left1/left1.component';
import {Left2Component} from './admin/left2/left2.component';
import {Left3Component} from './admin/left3/left3.component';
import {Center1Component} from './admin/center1/center1.component'
import { AddteachComponent } from './admin/addteach/addteach.component';
import { DeleteachComponent } from './admin/deleteach/deleteach.component';

const routes: Routes = [
  //重定向
  {path:'',redirectTo:'/left1',pathMatch:'full'},
  {path:'left1' ,component : Left1Component},
  {path:'left2' ,component : Left2Component,
    //添加子路由
      children:[
        {path:'addteacher' , component : AddteachComponent},
        {path:'deleteacher' , component : DeleteachComponent}
      ]
  },

  {path:'left3' ,component : Left3Component},
  //{path:'center1' ,component : Center1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
