import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';
import { SharedModule } from 'src/shared/shared.module';
import { PostsService } from './services/posts.service';
import { CategoriesService } from './services/categories.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostModule,
    CategoryModule,
    SharedModule
  ],
  exports: [
    //import Cms in App will import everything of Post & Cate Module
    PostModule,
    CategoryModule
  ],
  providers: [
    PostsService,
    CategoriesService
  ]
})
export class CmsModule { }
