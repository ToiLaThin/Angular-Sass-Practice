import { Component, ElementRef, EmbeddedViewRef, OnInit, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { IPost } from '../../../types/post.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusEnum } from '../../../types/status.enum';
import { PostsRenderComponent } from './posts-render/posts-render.component';
import { ViewTypeEnum } from '../../../types/view-type.enum';
import { PostsService } from 'src/cms/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts$!: Observable<IPost[]>;
  subscription!: Subscription;

  @ViewChild('postListContainer', {read: ElementRef, static: true}) postListContainer!: ElementRef;
  // @ViewChildren(PostsRenderComponent) postsToRender!: QueryList<PostsRenderComponent>;
  @ViewChildren(PostsRenderComponent, {read: ElementRef}) postsToRender!: QueryList<ElementRef>;
  @ViewChild('tableViewContainer', {read: ViewContainerRef, static: true}) tableViewContainer!: ViewContainerRef;
  @ViewChild('postListTable', {read: TemplateRef, static: true}) postListTable!: TemplateRef<any>;
  postsDOM: ElementRef[] = [];

  canChangeViewType: boolean = true;
  isTableViewType = false;
  viewType: ViewTypeEnum = ViewTypeEnum.Default;

  constructor(private postsService: PostsService, 
              private route: ActivatedRoute,
              private router: Router,
              private renderer: Renderer2) { 
    this.posts$ = postsService.displayingPosts$.pipe(
      map((p) => p)
    );
    // this.subscription = this.route.url.subscribe( 
    //   (url) => {
    //     console.log(url);
    //   }
    // )
    
  }

  ngOnInit(): void {
    // this.postsService.addPost({
    //   id: this.postsService.getNewId(),
    //   title: 'Test Post 1',
    //   image: 'https://picsum.photos/200/300',
    //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    //   date: new Date(),
    //   status: StatusEnum.Published,
    //   categoryId: 0
    // });
    //this.postsService.filterPostsByCategory();
  }

  ngAfterViewInit(): void {
    
    console.log(this.postsToRender);
    console.log(typeof(this.postsToRender));
    // this.posts = this.postsToRender.toArray().map(p => p.viewDetailOfPost);
    // this.postsDOM = this.postsToRender.toArray().map(p => p.nativeElement);
    this.postsDOM = this.postsToRender.toArray();
    console.log(this.postsDOM);
    console.log(typeof(this.postsDOM));//list is object
    
  }
    

  changeLayout() {
    const postsTableEmbeddedView: EmbeddedViewRef<any> = this.postListTable.createEmbeddedView(null);
    if(this.viewType === ViewTypeEnum.Default) {
      this.viewType = ViewTypeEnum.News;
      this.postsDOM.forEach(p => {
        // this.renderer.setStyle(p, 'display', 'none');
        // p.nativeElement.style.display = 'none';
        // console.log((p.nativeElement as HTMLElement).firstChild?.childNodes);
        const postComponent: HTMLElement = (p.nativeElement as HTMLElement);
        const postElement = postComponent.querySelector('.post');
        const postHeader = postComponent.querySelector('.post-header');
        const postContent = postComponent.querySelector('.post-content');
        const postFooter = postComponent.querySelector('.post-footer');
        this.renderer.addClass(postElement, 'post-news-view-type');
        this.renderer.addClass(postHeader, 'post-news-view-type-header');
        this.renderer.addClass(postContent, 'post-news-view-type-content');
        this.renderer.addClass(postFooter, 'post-news-view-type-footer');
        //console.log(postComponent,postHeader,postContent,postFooter);
      });
    } else if (this.viewType == ViewTypeEnum.News) {
      this.viewType = ViewTypeEnum.Table;
      this.isTableViewType = true;
      this.postsDOM.forEach(p => {
        const postComponent: HTMLElement = (p.nativeElement as HTMLElement);
        const postElement = postComponent.querySelector('.post');
        const postHeader = postComponent.querySelector('.post-header');
        const postContent = postComponent.querySelector('.post-content');
        const postFooter = postComponent.querySelector('.post-footer');
        this.renderer.removeClass(postElement, 'post-news-view-type');
        this.renderer.removeClass(postHeader, 'post-news-view-type-header');
        this.renderer.removeClass(postContent, 'post-news-view-type-content');
        this.renderer.removeClass(postFooter, 'post-news-view-type-footer');
        //console.log(postComponent,postHeader,postContent,postFooter);
        this.tableViewContainer.insert(postsTableEmbeddedView);

      });
    } else if (this.viewType == ViewTypeEnum.Table) {
      this.viewType = ViewTypeEnum.Default;
      this.isTableViewType = false;
      this.tableViewContainer.remove(0)
    }
  }
}
