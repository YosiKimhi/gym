import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymclassComponent } from './gymclass.component';

describe('GymclassComponent', () => {
  let component: GymclassComponent;
  let fixture: ComponentFixture<GymclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
