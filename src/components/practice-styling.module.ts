import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconHnavbarComponent } from './navbars/icon-hnavbar/icon-hnavbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion/accordion.component';

const routes: Routes = [
  {
    path: 'icon-hnavbar',
    component: IconHnavbarComponent,
    outlet: 'primary'
  },
  {
    path: 'accordion',
    component: AccordionComponent,
    outlet: 'primary'
  }
]

@NgModule({
  declarations: [
    IconHnavbarComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    IconHnavbarComponent,
  ]
})
export class PracticeStylingModule { }
