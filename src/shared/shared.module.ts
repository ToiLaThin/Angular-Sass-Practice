import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPillBtnComponent } from './components/shared-pill-btn/shared-pill-btn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormMessageComponent } from './components/form-message/form-message.component';
import { HtmlToTextPipe } from './pipes/html-to-text.pipe';
import { InitialCharsPipe } from './pipes/initial-chars.pipe';



@NgModule({
  declarations: [
    SharedPillBtnComponent,
    FormMessageComponent,
    HtmlToTextPipe,
    InitialCharsPipe
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
    ReactiveFormsModule,
    HtmlToTextPipe,
    InitialCharsPipe

  ]
})
export class SharedModule { }
