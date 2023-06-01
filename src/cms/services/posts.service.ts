import { Injectable } from '@angular/core';
import { IPost } from '../types/post.interface';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { CategoriesService } from './categories.service';

@Injectable(
  //{ providedIn: 'root'}
    )
export class PostsService {

  postsKey = 'posts';
  newId$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  posts$: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([]);
  displayingPosts$: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([]);
  constructor(private categoriesService: CategoriesService) { 
    const postsStr = window.localStorage.getItem(this.postsKey);
    if(postsStr) {
      const postLstObj = JSON.parse(postsStr);
      console.log(`posts service inited with data: ${postLstObj} with type: ${typeof(postLstObj)}`);
      this.posts$.next(postLstObj);
      //this.displayingPosts$ = this.posts$; ? this line caused error
    }
  }

  addPost(post: IPost): void {
    const posts = this.posts$.getValue();
    posts.push(post);
    this.posts$.next(posts);
    window.localStorage.setItem(this.postsKey, JSON.stringify(posts));
  }
  
  getNewId(): number {
    const id = this.newId$.getValue();
    this.newId$.next(id + 1);
    return id;
  }
  
  editPost(post: IPost): void {
    const posts = this.posts$.getValue();
    const idx = posts.findIndex(p => p.id = post.id);
    posts[idx] = post;
    this.posts$.next(posts);
    window.localStorage.setItem(this.postsKey, JSON.stringify(posts));
  }
  
  deletePost(post: IPost) : void{
    const posts = this.posts$.getValue();
    const idx = posts.findIndex(p => p.id = post.id);
    if(idx < 0) 
    return;
    posts.splice(idx, 1);
    this.posts$.next(posts);
    window.localStorage.setItem(this.postsKey, JSON.stringify(posts));
  }

  filterPostsByCategory(): void {
    // this.displayingPosts$ = combineLatest(this.posts$, this.categoriesService.selectedCategoryIds$).pipe(
    //   map(([posts, selectedCategoryIds]) => {
    //     if(selectedCategoryIds.length == 0)
    //       return posts;
    //     posts.filter( p => selectedCategoryIds.includes(p.categoryId));
    //     console.log("from filterPostsByCategory: " + posts);
    //     return posts;
        
    //   })
    // )
    const selectedCategoryIds: number[] = this.categoriesService.selectedCategoryIds$.getValue();
    if(selectedCategoryIds.length === 0) {
      const allPosts = this.posts$.getValue();
      console.log("All posts:",allPosts);
      this.displayingPosts$.next(allPosts);
      return;
    }
    const toDisplayPosts: IPost[] = this.posts$
      .getValue()
      .filter((p) =>{
        //console.log("from filterPostsByCategory condition: " + p.categoryId + " " + typeof(p.categoryId) + "" + selectedCategoryIds+ "" + selectedCategoryIds.includes(p.categoryId));
        const pCateId: number = parseInt(p.categoryId.toString());
        //console.log("after parse: " + pCateId + " " + typeof(pCateId) + "" + selectedCategoryIds + "" + selectedCategoryIds.includes(pCateId));
        
        //selectedCategoryIds.includes(pCateId);
        return selectedCategoryIds.includes(pCateId);
      });
    console.log("from filterPostsByCategory: " + toDisplayPosts);
    this.displayingPosts$.next(toDisplayPosts);
  }
}
