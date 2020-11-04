import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';
import { AboutComponent } from './about/about.component';
import { ClubComponent } from './club/club.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ContactComponent } from './contact/contact.component';
import { VenuesComponent } from './venues/venues.component';
import { AcademiesComponent } from './academies/academies.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { P5Component } from './p5/p5.component';
import { P6Component } from './p6/p6.component';
import { P7Component } from './p7/p7.component';
import { P8Component } from './p8/p8.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:" ",component:NavComponent},
  {path:"home",component:HomeComponent},
  {path:"nav",component:NavComponent},
  {path:"about",component:AboutComponent},
  {path:"club",component:ClubComponent},
  {path:"facilities",component:FacilitiesComponent},
  {path:"contact",component:ContactComponent},
  {path:"venues",component:VenuesComponent},
  {path:"academies", children:[
    {path:"",component:AcademiesComponent},
    {path:"p1",component:P1Component},
    {path:"p2",component:P2Component},
    {path:"p3",component:P3Component},
    {path:"p4",component:P4Component},
    {path:"p5",component:P5Component},
    {path:"p6",component:P6Component},
    {path:"p7",component:P7Component},
    {path:"p8",component:P8Component}
  ]},
  {path:"news",component:NewsComponent},
  {path:"**",component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
