import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostModule,
    CategoryModule,
    SharedModule
  ],
  exports: [
    CategoryModule
  ]
})
export class CmsModule { }
