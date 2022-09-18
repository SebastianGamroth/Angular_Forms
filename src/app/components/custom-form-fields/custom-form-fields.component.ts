import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-form-fields',
  templateUrl: './custom-form-fields.component.html',
  styleUrls: ['./custom-form-fields.component.scss']
})
export class CustomFormFieldsComponent implements OnInit {

  public reservationForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [
      Validators.required
    ], []),
    lastname: new FormControl('', [
      Validators.required
    ], []),
    table: new FormControl('', [
      Validators.required
    ], [])
  });

  constructor() { }

  ngOnInit(): void {
  }

}
