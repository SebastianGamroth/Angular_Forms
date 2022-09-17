import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-array',
  templateUrl: './dynamic-array.component.html',
  styleUrls: ['./dynamic-array.component.scss']
})
export class DynamicArrayComponent implements OnInit {

  public memberListForm: FormGroup = this._createForm();

  constructor(private _fb: FormBuilder) { }

  private _createForm(): FormGroup {
    return this._fb.group({
      listName: ['', [Validators.required], []],
      memberList: this._fb.array([])
    });
  }

  ngOnInit(): void {
  }

}
