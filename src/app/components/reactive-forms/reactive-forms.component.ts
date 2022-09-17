import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ], []),
    password: new FormControl('', [
      Validators.required
    ], [])
  });

  constructor() {
    this.loginForm.valueChanges.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
