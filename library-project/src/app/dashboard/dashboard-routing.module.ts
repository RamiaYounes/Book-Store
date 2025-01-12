import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';
import { AuthorDashboardComponent } from './author-dashboard/author-dashboard.component';
const routes: Routes = [


{path:'dashboard',component:ParentDashboardComponent,
children:[
  {
    path: '', component:AdminDashboardComponent,pathMatch: 'full'
  },
  {path:'login',component:DashboardLoginComponent},
  {path:'author',component:AuthorDashboardComponent},
]},]
@NgModule({
    imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }