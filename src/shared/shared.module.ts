import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPillBtnComponent } from './components/shared-pill-btn/shared-pill-btn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormMessageComponent } from './components/form-message/form-message.component';
import { HtmlToTextPipe } from './pipes/html-to-text.pipe';
import { InitialCharsPipe } from './pipes/initial-chars.pipe';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';
import { NotificationBoxComponent } from './components/notification-box/notification-box.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { ShowDropDownService } from './services/show-drop-down.service';



@NgModule({
  declarations: [
    SharedPillBtnComponent,
    FormMessageComponent,
    HtmlToTextPipe,
    InitialCharsPipe,
    BreadcrumbComponent,
    TabsComponent,
    NotificationBoxComponent,
    DropdownMenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    TabsComponent,
    SharedPillBtnComponent,
    BreadcrumbComponent,
    NotificationBoxComponent,
    DropdownMenuComponent,
    CommonModule,
    FormMessageComponent,
    FormsModule,
    ReactiveFormsModule,
    HtmlToTextPipe,
    InitialCharsPipe

  ]
})
export class SharedModule { }
