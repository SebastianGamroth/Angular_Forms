import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormFieldsComponent } from './components/custom-form-fields/custom-form-fields.component';
import { DynamicArrayComponent } from './components/dynamic-array/dynamic-array.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'dynamic-array', component: DynamicArrayComponent },
  { path: 'custom-form-fields', component: CustomFormFieldsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
