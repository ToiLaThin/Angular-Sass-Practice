import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { IPost } from '../../types/post.interface';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusEnum } from '../../types/status.enum';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts$!: Observable<IPost[]>;
  subscription!: Subscription;
  constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router) { 
    this.posts$ = postsService.posts$.pipe(
      map((p) => p)
    );
    // this.subscription = this.route.url.subscribe( 
    //   (url) => {
    //     console.log(url);
    //   }
    // )
    
  }
  
  ngOnInit(): void {
    this.postsService.addPost({
      id: this.postsService.getNewId(),
      title: 'Test Post 1',
      image: 'https://picsum.photos/200/300',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      date: new Date(),
      status: StatusEnum.Published
    });
    // this.postsService.addPost({
    //   id: this.postsService.getNewId(),
    //   title: 'Test Post 2',
    //   image: 'https://picsum.photos/200/300',
    //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    //   date: new Date(),
    //   status: StatusEnum.Published
    // });
    // this.postsService.addPost({
    //   id: this.postsService.getNewId(),
    //   title: 'Test Post 3',
    //   image: 'https://picsum.photos/200/300',
    //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    //   date: new Date(),
    //   status: StatusEnum.Published
    // });
  }

}
