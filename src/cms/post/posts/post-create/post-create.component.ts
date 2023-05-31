import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../types/post.interface';
import { StatusEnum } from '../../../types/status.enum';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PostsService } from 'src/cms/services/posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  post!: IPost
  allStatus = Object.values(StatusEnum).filter(x => typeof(x) == 'string'); //to remember
  submmited = false;


  //rich text editor
  public rEditor = ClassicEditor;
  
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.post = {
      id : this.postsService.getNewId(),
      title: '',
      content: '',
      image: 'https://picsum.photos/200/300',
      date: new Date(),
      status: StatusEnum.Draft,
    };
  }

  onSubmit() {
    this.postsService.addPost(this.post);
    this.resetAllFields();
  }

  resetAllFields() {
    this.post = {
      id: this.post.id, //old id, do not get new id
      title: '',
      content: '',
      image: 'https://picsum.photos/200/300',
      date: new Date(),
      status: StatusEnum.Draft,
    };
  }

  
}
