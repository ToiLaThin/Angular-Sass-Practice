import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VNavbarComponent } from './layouts/v-navbar/v-navbar.component';
import { HNavbarComponent } from './layouts/h-navbar/h-navbar.component';
import { HNavbarOptionsComponent } from './layouts/h-navbar/h-navbar-options/h-navbar-options.component';
import { MainComponent } from './layouts/main/main.component';
import { PostModule } from 'src/cms/post/post.module';
import { TabsComponent } from './layouts/tabs/tabs.component';



@NgModule({
  declarations: [
    VNavbarComponent,
    HNavbarComponent,
    HNavbarOptionsComponent,
    MainComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    VNavbarComponent,
    HNavbarComponent,
    MainComponent,
    TabsComponent
  ]
})
export class CoreModule { }
