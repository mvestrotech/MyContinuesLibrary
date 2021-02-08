import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {SignupComponent} from '../auth/signup/signup.component';
import {SigninComponent} from '../auth/signin/signin.component';
import {AuthGuardService} from '../services/auth-guard.service';
import {BookFormComponent} from './book-form/book-form.component';
import {SingleBookComponent} from './single-book/single-book.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  const appRoutes: Routes = [
    { path: 'auth/signup', component: SignupComponent },
    { path: 'auth/signin', component: SigninComponent },
    { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },
    { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
    { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
    { path:  '', redirectTo: 'books', pathMatch: 'full'},
    { path: '**', redirectTo: 'books' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListComponent ],
      imports: [ RouterModule.forRoot(appRoutes)]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
