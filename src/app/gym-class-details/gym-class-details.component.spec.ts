import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymClassDetailsComponent } from './gym-class-details.component';

describe('GymClassDetailsComponent', () => {
  let component: GymClassDetailsComponent;
  let fixture: ComponentFixture<GymClassDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymClassDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymClassDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
