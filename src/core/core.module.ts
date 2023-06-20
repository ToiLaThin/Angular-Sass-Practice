import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VNavbarComponent } from './layouts/v-navbar/v-navbar.component';
import { HNavbarComponent } from './layouts/h-navbar/h-navbar.component';
import { HNavbarOptionsComponent } from './layouts/h-navbar/h-navbar-options/h-navbar-options.component';
import { MainComponent } from './layouts/main/main.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { PracticeStylingModule } from 'src/components/practice-styling.module';

@NgModule({
  declarations: [
    VNavbarComponent,
    HNavbarComponent,
    HNavbarOptionsComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PracticeStylingModule
  ],
  exports: [
    VNavbarComponent,
    HNavbarComponent,
    MainComponent,
  ]
})
export class CoreModule { }
