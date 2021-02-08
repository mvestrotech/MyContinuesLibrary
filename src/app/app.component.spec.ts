import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import firebase from 'firebase';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    }).compileComponents();
  });

  it(`should have as title 'MyLibrary'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MyLibrary');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
  });
});
