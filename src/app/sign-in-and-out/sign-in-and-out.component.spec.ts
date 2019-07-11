import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInAndOutComponent } from './sign-in-and-out.component';

describe('SignInAndOutComponent', () => {
  let component: SignInAndOutComponent;
  let fixture: ComponentFixture<SignInAndOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInAndOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInAndOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
