import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowPlaceholderComponent } from './arrow-placeholder.component';

describe('ArrowPlaceholderComponent', () => {
  let component: ArrowPlaceholderComponent;
  let fixture: ComponentFixture<ArrowPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
