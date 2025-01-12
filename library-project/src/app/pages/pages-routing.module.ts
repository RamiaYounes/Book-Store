import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleBookComponent } from './single-book/single-book.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { FreeBooksComponent } from './free-books/free-books.component';
import { authGuard } from '../guards/auth.guard';
import { FavoraiteBooksComponent } from './favoraite-books/favoraite-books.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ParenetComComponent } from './parenet-com/parenet-com.component';
import { PurchesBooksComponent } from './purches-books/purches-books.component';
import { FavparentComponent } from './favparent/favparent.component';
import { FreeparentComponent } from './freeparent/freeparent.component';
import { PurchparentComponent } from './purchparent/purchparent.component';
import { PagesComponent } from './pages/pages.component';
const routes: Routes =
 [
    {path:'',component:PagesComponent,children:[
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'contact-us',component:ContactUsComponent,canActivate:[authGuard]},

  
    {
      path:"books",component:ParenetComComponent,
      children:[
        {
          path: '', component:AllBooksComponent,pathMatch: 'full'
        },
        {
          path:"favoraite",component:FavparentComponent,canActivate:[authGuard],
          children:[
          {
            path:"",component:FavoraiteBooksComponent,
          },
            {
              path:"search",component:FavoraiteBooksComponent
          },]
        }, 
       
         
        {
          path:"purches",component:PurchparentComponent,canActivate:[authGuard],
          children:[
            {
              path:"",component:PurchesBooksComponent,
            },
              {
                path:"search",component:PurchesBooksComponent
            },]
        },
        {
          path:"free",component:FreeparentComponent,
          children:[
            {
              path:"",component:FreeBooksComponent,
            },
              {
                path:"search",component:FreeBooksComponent
            },]
        },
        {
            path:"search",component:AllBooksComponent
        },
      ]
      },
  
   
    {path:'books/:id',component:SingleBookComponent,
    },
  ]} 
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }
  