import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from '../../../types/post.interface';
import { StatusEnum } from '../../../types/status.enum';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PostsService } from 'src/cms/services/posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss'],
})
export class PostEditComponent implements OnInit {
  postEditingId: number = 0;
  postEditing!: IPost;
  postEdit = new FormGroup({
    title: new FormControl(),
    content: new FormControl(),
    image: new FormControl(),
    status: new FormControl(),
  });
  allStatus = Object.values(StatusEnum).filter((v) => typeof v === 'string');
  public rEditor = ClassicEditor;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postEditingId = params['id'];
    });
    this.postEditing = this.postsService.posts$
      .getValue()
      .find((p) => p.id == this.postEditingId)!;
    console.log(this.postEditing);
    this.postEdit.setValue({
      title: this.postEditing.title,
      content: this.postEditing.content,
      image: this.postEditing.image,
      status: this.postEditing.status,
    });
  }

  editPost() {
    this.postEditing.status = this.postEdit.value.status;
    this.postEditing.title = this.postEdit.value.title;
    this.postEditing.content = this.postEdit.value.content;
    this.postEditing.image = this.postEdit.value.image;

    this.postsService.editPost(this.postEditing);
    this.router.navigate(['posts', 'list']);
  }
}
