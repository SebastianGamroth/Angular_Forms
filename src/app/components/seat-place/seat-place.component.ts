import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seat-place',
  templateUrl: './seat-place.component.html',
  styleUrls: ['./seat-place.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeatPlaceComponent),
      multi: true
    }
  ]
})
export class SeatPlaceComponent implements ControlValueAccessor {

  public onTouched = () => { };
  public onChange = (value: string) => { };
  public touched: boolean = false;
  public isDisabled: boolean = false;
  public value: string = '';

  writeValue(value: string): void {
    this.value = value;
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  image: any = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1]
  ];

}
