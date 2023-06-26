import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconHnavbarComponent } from './navbars/icon-hnavbar/icon-hnavbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion/accordion.component';
import { SideNavsComponent } from './navbars/sidenav/side-navs.component';
import { SharedModule } from 'src/shared/shared.module';
import { SideNavOverlayComponent } from './navbars/sidenav/side-nav-overlay/side-nav-overlay.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { DropdownHoverComponent } from './dropdowns/dropdown-hover/dropdown-hover.component';
import { HeadersComponent } from './headers/headers.component';
import { HeaderResponsiveComponent } from './headers/header-responsive/header-responsive.component';
import { OverlayImageComponent } from './overlay-image/overlay-image.component';

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
  },
  {
    path: 'sidenavs',
    component: SideNavsComponent,
    children: [
      {
        path: 'overlay',
        component: SideNavOverlayComponent,
      }
    ]
  },
  {
    path: 'dropdowns',
    component: DropdownsComponent,
    children: [
      {
        path: 'hover',
        component: DropdownHoverComponent,
      }
    ]
  },
  {
    path: 'headers',
    component: HeadersComponent,
    children: [
      {
        path: 'responsive',
        component: HeaderResponsiveComponent,
      }
    ]
  },
  {
    path: 'overlay-image',
    component: OverlayImageComponent,
  }
]

@NgModule({
  declarations: [
    IconHnavbarComponent,
    AccordionComponent,
    SideNavsComponent,
    SideNavOverlayComponent,
    DropdownsComponent,
    DropdownHoverComponent,
    HeadersComponent,
    HeaderResponsiveComponent,
    OverlayImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    IconHnavbarComponent,
  ]
})
export class PracticeStylingModule { }
