import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddteacherComponent } from './addteacher/addteacher.component';
import { DeleteacherComponent } from './deleteacher/deleteacher.component';

const routes: Routes = [
  //{path : '',redirectTo:'/',pathMatch:'full'}
  {path :'addteacher',component : AddteacherComponent},
  {path :'deleteacher',component : DeleteacherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
