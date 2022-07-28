import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorLabelComponent } from './floor-label.component';

describe('FloorLabelComponent', () => {
  let component: FloorLabelComponent;
  let fixture: ComponentFixture<FloorLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
