import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/cms/services/categories.service';
import { ICategory } from 'src/cms/types/category.interface';

@Component({
  selector: 'app-posts-header',
  templateUrl: './posts-header.component.html',
  styleUrls: ['./posts-header.component.scss']
})
export class PostsHeaderComponent implements OnInit {

  allCategories$!: Observable<ICategory[]>;
  constructor(private categoriesService: CategoriesService) { }
  ngOnInit(): void {
    this.allCategories$ = this.categoriesService.$allCategories;
    this.accordion();
  }

  accordion() {
    const section = ".filter-item";
    const heading = ".filter-item-inner-heading";
    const list = ".filter-attribute-list";
    const sectionEle = document.querySelector(section);
    sectionEle?.addEventListener("click", function (e) {
      const listEle = sectionEle.querySelector(list) as HTMLElement;
      const headingEle = sectionEle.querySelector(heading);
      headingEle?.addEventListener("click", function () {
        headingEle.classList.toggle("plus");
        listEle.style.height = listEle.style.height === "0px" ? "100%" : "0px";
      });
    });
  }
}
