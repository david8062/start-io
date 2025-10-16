import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarModal } from './car-modal';

describe('CarModal', () => {
  let component: CarModal;
  let fixture: ComponentFixture<CarModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
