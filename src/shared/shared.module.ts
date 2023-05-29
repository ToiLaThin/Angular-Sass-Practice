import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPillBtnComponent } from './components/shared-pill-btn/shared-pill-btn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormMessageComponent } from './components/form-message/form-message.component';



@NgModule({
  declarations: [
    SharedPillBtnComponent,
    FormMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SharedPillBtnComponent,
    CommonModule,
    FormMessageComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
