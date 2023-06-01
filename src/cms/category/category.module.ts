import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CategoryCreateComponent } from './categories/category-create/category-create.component';
import {MatInputModule} from '@angular/material/input';



const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      {
        path: 'list',
        component: CategoryListComponent,
        outlet: 'primary',
        pathMatch: 'full',
        data: {
          breadcrumb: 'Categories List'
        }
      },
      {
        path: 'create',
        component: CategoryCreateComponent,
        outlet: 'primary',
        pathMatch: 'full',
        data: {
          breadcrumb: 'Categories Create'
        }
      },

    ]
  }
]
@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryListComponent,
    CategoryCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatIconModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

  ]
})
export class CategoryModule { }
