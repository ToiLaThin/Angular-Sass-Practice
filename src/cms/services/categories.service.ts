import { Injectable } from '@angular/core';
import { ICategory } from '../types/category.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CategoriesService {

  $allCategories: BehaviorSubject<ICategory[]> = new BehaviorSubject<ICategory[]>([]);
  constructor() { }

  addCategory(category: ICategory): void {
    const categories = this.$allCategories.getValue();
    categories.push(category);
    this.$allCategories.next(categories)
  }

  removeCategory(category: ICategory): void {
    const categories = this.$allCategories.getValue();
    const removeCateIdx = categories.findIndex(c => c.id == category.id);
    if(removeCateIdx < 0)
      return;
    categories.splice(removeCateIdx, 1);
    this.$allCategories.next(categories);
  }

}