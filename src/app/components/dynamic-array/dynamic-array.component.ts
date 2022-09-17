import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-array',
  templateUrl: './dynamic-array.component.html',
  styleUrls: ['./dynamic-array.component.scss']
})
export class DynamicArrayComponent implements OnInit {

  public memberListForm: FormGroup = this._createForm();

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  private _createForm(): FormGroup {
    return this._fb.group({
      listName: ['', [Validators.required], []],
      memberList: this._fb.array([])
    });
  }

  public _createMember(): FormGroup {
    return this._fb.group({
      vorname: ['', [Validators.required], []],
      nachname: ['', [Validators.required], []]
    });
  }

  public addMember(): void {
    this.memberList.push(this._createMember());
  }

  public get memberList(): FormArray {
    return this.memberListForm.get('memberList') as FormArray;
  }

  public isDisabled(): boolean {
    return !(this.memberListForm.valid && (this.memberListForm.touched || this.memberListForm.dirty));
  }

}