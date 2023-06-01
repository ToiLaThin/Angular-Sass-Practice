import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/cms/services/categories.service';
import { PostsService } from 'src/cms/services/posts.service';
import { ICategory } from 'src/cms/types/category.interface';

@Component({
  selector: 'app-posts-header',
  templateUrl: './posts-header.component.html',
  styleUrls: ['./posts-header.component.scss']
})
export class PostsHeaderComponent implements OnInit {

  allCategories$!: Observable<ICategory[]>;
  constructor(private categoriesService: CategoriesService,
              private postsService: PostsService
  ) { 
    this.allCategories$ = this.categoriesService.allCategories$;
  }
  ngOnInit(): void {
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

  onCategoryChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value: number = parseInt(target.value);
    // console.log(`From category filter: ${target}`);
    // console.log(target);
    // console.log(typeof(value));
    // console.log(value);

    const allSelectedCategoryIds = this.categoriesService.selectedCategoryIds$.getValue();
    
    if (allSelectedCategoryIds.includes(value)) {
      this.categoriesService.removeSelectedCategoryId(value);
      //console.log(`From category filter: ${value} removed`);
      
    }
    else {
      this.categoriesService.addSelectedCategoryId(value);
      //console.log(`From category filter: ${value} added`);
    }
    //console.log("From category filter:" +this.categoriesService.selectedCategoryIds$.getValue());
    
    this.postsService.filterPostsByCategory();
  }
}
