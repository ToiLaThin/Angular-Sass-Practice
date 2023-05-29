import { Injectable } from '@angular/core';
import { IPost } from '../types/post.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  $newId: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  posts$: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([]);
  constructor() { 

  }

  addPost(post: IPost): void {
    const posts = this.posts$.getValue();
    posts.push(post);
    this.posts$.next(posts);
  }

  getNewId(): number {
    const id = this.$newId.getValue();
    this.$newId.next(id + 1);
    return id;
  }

  editPost(post: IPost): void {
    const posts = this.posts$.getValue();
    const idx = posts.findIndex(p => p.id = post.id);
    posts[idx] = post;
    this.posts$.next(posts);
  }

  deletePost(post: IPost) : void{
    const posts = this.posts$.getValue();
    const idx = posts.findIndex(p => p.id = post.id);
    if(idx < 0) 
      return;
    posts.splice(idx, 1);
    this.posts$.next(posts);
  }
}
