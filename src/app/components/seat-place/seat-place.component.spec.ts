import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatPlaceComponent } from './seat-place.component';

describe('SeatPlaceComponent', () => {
  let component: SeatPlaceComponent;
  let fixture: ComponentFixture<SeatPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
