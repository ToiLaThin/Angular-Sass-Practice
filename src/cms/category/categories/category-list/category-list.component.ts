import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/cms/services/categories.service';
import { ICategory } from 'src/cms/types/category.interface';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  allCategories$!: Observable<ICategory[]>;
  constructor(private categoriesService: CategoriesService) { 
    this.allCategories$ = this.categoriesService.allCategories$;
  }

  ngOnInit(): void {
  }

}
