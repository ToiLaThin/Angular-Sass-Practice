import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from 'src/cms/category/categories/categories.component';
import { PostsComponent } from 'src/cms/post/posts/posts.component';

const routes: Routes = [
{
  path: 'posts',
  loadChildren: () => import('../cms/post/post.module').then(m => m.PostModule)
},
{
  path: 'categories',
  loadChildren: () => import('../cms/category/category.module').then(m => m.CategoryModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
