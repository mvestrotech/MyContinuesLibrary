import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from './services/auth.service';
import {BooksService} from './services/books.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {AuthGuardService} from './services/auth-guard.service';
import { BookingListComponent } from './booking-list/booking-list.component';
import { SingleBookingComponent } from './booking-list/single-booking/single-booking.component';
import {BookingService} from './services/booking.service';
import {BookingFormComponent} from './booking-list/booking-form/booking-form.component';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },
  { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
  { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
  { path: 'booking', canActivate: [AuthGuardService], component: BookingFormComponent },
  { path:  '', redirectTo: 'books', pathMatch: 'full'},
  { path: '**', redirectTo: 'books' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent,
    BookingListComponent,
    BookFormComponent,
    BookingFormComponent,
    SingleBookingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    BooksService,
    AuthService,
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
