import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { RouterModule, Routes } from '@angular/router';
import { PostsRenderComponent } from './posts/post-list/posts-render/posts-render.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { SharedModule } from 'src/shared/shared.module';
import { PostEditComponent } from './posts/post-edit/post-edit.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {
        path: 'list',
        component: PostListComponent,
        pathMatch: 'full',
      },
      {
        path: 'detail/:id',
        component: PostDetailComponent,
        pathMatch: 'full',
      },
      {
        path: 'edit/:id',
        component: PostEditComponent,
        // outlet: 'postsCreate',
        pathMatch: 'full',

      },
      {
        path: 'create',
        component: PostCreateComponent,
        outlet: 'postsCreate',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    PostsComponent,
    PostsRenderComponent,
    PostDetailComponent,
    PostListComponent,
    PostCreateComponent,
    PostEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    PostsComponent
  ],
  
})
export class PostModule { }
