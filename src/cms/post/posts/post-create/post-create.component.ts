import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../types/post.interface';
import { StatusEnum } from '../../../types/status.enum';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PostsService } from 'src/cms/services/posts.service';
import { CategoriesService } from 'src/cms/services/categories.service';
import { Observable } from 'rxjs';
import { ICategory } from 'src/cms/types/category.interface';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  post!: IPost
  allStatus = Object.values(StatusEnum).filter(x => typeof(x) == 'string'); //to remember
  submmited = false;
  allCategories$: Observable<ICategory[]> = this.categoriesService.allCategories$;

  //rich text editor
  public rEditor = ClassicEditor;
  
  constructor(private postsService: PostsService,
              private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.post = {
      id : this.postsService.getNewId(),
      title: '',
      content: '',
      image: 'https://picsum.photos/200/300',
      date: new Date(),
      status: StatusEnum.Draft,
      categoryId: this.categoriesService.allCategories$.getValue().length > 0 ? this.categoriesService.allCategories$.getValue()[0].id : 0
    };
  }

  onSubmit() {
  // console.log("From onSubmit() of post-create.component.ts");
  // console.log(typeof(this.post.categoryId)); // la string
  // console.log(this.post.categoryId);
    
    
    
    this.post.categoryId = parseInt(this.post.categoryId.toString());
    this.postsService.addPost(this.post);
    console.log(this.post);
    this.resetAllFields();
    this.post.id = this.postsService.getNewId();
  }

  resetAllFields() {
    this.post = {
      id: this.post.id, //old id, do not get new id
      title: '',
      content: '',
      image: 'https://picsum.photos/200/300',
      date: new Date(),
      status: StatusEnum.Draft,
      categoryId: this.categoriesService.allCategories$.getValue().length > 0 ? this.categoriesService.allCategories$.getValue()[0].id : 0
    };
  }

  
}
