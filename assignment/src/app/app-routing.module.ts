import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [
  {path:"",redirectTo:"/dropdown",pathMatch:"full"},
  {path:"dropdown", component:DropdownComponent},
  {path:"detail", component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
