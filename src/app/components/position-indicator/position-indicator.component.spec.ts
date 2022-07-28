import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionIndicatorComponent } from './position-indicator.component';

describe('PositionIndicatorComponent', () => {
  let component: PositionIndicatorComponent;
  let fixture: ComponentFixture<PositionIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
