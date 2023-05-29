import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../../types/post.interface';
import { Router } from '@angular/router';
import { PostsService } from 'src/cms/post/services/posts.service';

@Component({
  selector: 'app-posts-render',
  templateUrl: './posts-render.component.html',
  styleUrls: ['./posts-render.component.scss']
})
export class PostsRenderComponent implements OnInit {

  constructor(private router: Router,private postsService: PostsService) { 
  }

  @Input('post') postToRender!: IPost;
  ngOnInit(): void {
  }

  viewDetailOfPost(id: number) {
    this.router.navigate(['posts', 'detail', id]);
  }

  navigateEditComponent(id: number) {
    this.router.navigate([{ outlets: { primary: ['posts', 'edit', id]}}])
  }

  deletePost() {
    this.postsService.deletePost(this.postToRender);
  }

}
