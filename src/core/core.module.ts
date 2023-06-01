import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VNavbarComponent } from './layouts/v-navbar/v-navbar.component';
import { HNavbarComponent } from './layouts/h-navbar/h-navbar.component';
import { HNavbarOptionsComponent } from './layouts/h-navbar/h-navbar-options/h-navbar-options.component';
import { MainComponent } from './layouts/main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    VNavbarComponent,
    HNavbarComponent,
    HNavbarOptionsComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    VNavbarComponent,
    HNavbarComponent,
    MainComponent,
  ]
})
export class CoreModule { }
