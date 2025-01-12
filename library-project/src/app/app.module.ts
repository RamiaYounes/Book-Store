import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BookCardComponent } from './layouts/book-card/book-card.component';
import { SingleBookComponent } from './pages/single-book/single-book.component';
import { AllBooksComponent } from './pages/all-books/all-books.component';

import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { FreeBooksComponent } from './pages/free-books/free-books.component';
import { FavoraiteBooksComponent } from './pages/favoraite-books/favoraite-books.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ParenetComComponent } from './pages/parenet-com/parenet-com.component';
import { PurchesBooksComponent } from './pages/purches-books/purches-books.component';
import { FavparentComponent } from './pages/favparent/favparent.component';
import { FreeparentComponent } from './pages/freeparent/freeparent.component';
import { PurchparentComponent } from './pages/purchparent/purchparent.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { AuthorDashboardComponent } from './dashboard/author-dashboard/author-dashboard.component';
import { ParentDashboardComponent } from './dashboard/parent-dashboard/parent-dashboard.component';
import { DashboardLoginComponent } from './dashboard/dashboard-login/dashboard-login.component';
import { PagesComponent } from './pages/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BookCardComponent,
    SingleBookComponent,
    AllBooksComponent,

    LoginComponent,
    RegisterComponent,
    FreeBooksComponent,
    FavoraiteBooksComponent,
    ContactUsComponent,
    ParenetComComponent,
    PurchesBooksComponent,
    FavparentComponent,
    FreeparentComponent,
    PurchparentComponent,
    AdminDashboardComponent,
    AuthorDashboardComponent,
    ParentDashboardComponent,
    DashboardLoginComponent,
    PagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesRoutingModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
   
    
  ],
  providers: [
    provideClientHydration(),
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
