import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiContainerComponent } from './pi-container.component';

describe('PiContainerComponent', () => {
  let component: PiContainerComponent;
  let fixture: ComponentFixture<PiContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
