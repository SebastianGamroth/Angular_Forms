import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormFieldsComponent } from './custom-form-fields.component';

describe('CustomFormFieldsComponent', () => {
  let component: CustomFormFieldsComponent;
  let fixture: ComponentFixture<CustomFormFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFormFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
