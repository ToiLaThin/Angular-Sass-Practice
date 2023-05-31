import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from '../../../types/post.interface';
import { PostsService } from 'src/cms/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {

  post: IPost | undefined;
  blogId: number = 0;
  constructor(private route: ActivatedRoute, private postsService: PostsService) { 
    this.route.params.subscribe(params => {
      this.blogId = params['id']
    });
    this.post = this.postsService.posts$.getValue().find(p => p.id == this.blogId);
    // console.log("From post detail, blog id:",this.blogId);
    // console.log("From post detail, all posts:",this.postsService.posts$.getValue());
    // console.log("From post detail, selected post:",this.post);
  }
}
