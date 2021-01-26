import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {AdminloginComponent} from './components/adminlogin/adminlogin.component';
import {UserloginComponent} from './components/userlogin/userlogin.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "Adminlogin", component: AdminloginComponent},
  {path: "Userlogin", component: UserloginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
