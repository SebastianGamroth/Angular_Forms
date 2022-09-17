import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicArrayComponent } from './components/dynamic-array/dynamic-array.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'dynamic-array', component: DynamicArrayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
