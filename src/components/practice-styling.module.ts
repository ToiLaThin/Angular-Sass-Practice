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
import { CarouselComponent } from './carousel/carousel.component';
import { ImageRelatedComponent } from './image-related/image-related.component';
import { ImageGridComponent } from './image-related/image-grid/image-grid.component';
import { ImageFormComponent } from './image-related/image-form/image-form.component';

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
  },
  {
    path: 'carousel',
    component: CarouselComponent,
  },
  {
    path: 'image-related',
    component: ImageRelatedComponent,
    children: [
      {
        path: 'image-grid',
        component: ImageGridComponent,
      }, {
        path: 'image-form',
        component: ImageFormComponent,
      }
    ]
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
    OverlayImageComponent,
    CarouselComponent,
    ImageRelatedComponent,
    ImageGridComponent,
    ImageFormComponent,
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
