import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllclassesComponent } from './allclasses.component';

describe('AllclassesComponent', () => {
  let component: AllclassesComponent;
  let fixture: ComponentFixture<AllclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
