import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { ICategory } from 'src/cms/types/category.interface';
import { CategoriesService } from './../../../services/categories.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit, AfterViewInit {

  newCategoryId!: number;
  newCategory!: ICategory;
  @ViewChild('categoryCreateForm', {read: ElementRef, static: false}) categoryCreateForm!: ElementRef;
  constructor(private categoriesService: CategoriesService, private renderer: Renderer2) {
    
  }

  ngOnInit(): void {
    this.newCategoryId = this.categoriesService.getId();
    this.reset();
  }

  ngAfterViewInit(): void {
    const catCreFrm = this.categoryCreateForm.nativeElement as HTMLFormElement;
    this.renderer.addClass(catCreFrm, 'category-create-form');
  }

  onSubmit() {
    this.categoriesService.addCategory(this.newCategory);
    this.reset();
  }

  reset() {
    this.newCategory = {
      id: this.newCategoryId,
      name: '',
      description: ''
    }
  }

}
