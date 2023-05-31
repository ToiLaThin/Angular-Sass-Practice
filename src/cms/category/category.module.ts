import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

const routes = [
  {
    path: '',
    component: CategoriesComponent
  }
]
@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CategoryModule { }
