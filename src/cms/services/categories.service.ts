import { Injectable } from '@angular/core';
import { ICategory } from '../types/category.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CategoriesService {
  categoryKey = 'categories'; // key for local storage
  allCategories$: BehaviorSubject<ICategory[]> = new BehaviorSubject<ICategory[]>([]);
  selectedCategoryIds$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  constructor() { 
    const categoriesStr = window.localStorage.getItem(this.categoryKey);
    if(categoriesStr) {
      const categoriesLstObj = JSON.parse(categoriesStr);
      this.allCategories$.next(categoriesLstObj);
      console.log(categoriesLstObj);
      console.log(typeof(categoriesLstObj));
    }
  }

  addCategory(category: ICategory): void {
    const categories = this.allCategories$.getValue();
    categories.push(category);
    this.allCategories$.next(categories)
    window.localStorage.setItem(this.categoryKey, JSON.stringify(categories));
  }
  
  removeCategory(category: ICategory): void {
    const categories = this.allCategories$.getValue();
    const removeCateIdx = categories.findIndex(c => c.id == category.id);
    if(removeCateIdx < 0)
    return;
    categories.splice(removeCateIdx, 1);
    this.allCategories$.next(categories);
    window.localStorage.setItem(this.categoryKey, JSON.stringify(categories));
  }

  getId(): number {
    const categories = this.allCategories$.getValue();
    if (categories.length == 0)
      return 0;
    const ids = categories.map(c => c.id);
    return Math.max(...ids) + 1;
  }

  addSelectedCategoryId(selectedCategoryId: number) {
    const selectedCategoryIds = this.selectedCategoryIds$.getValue();
    selectedCategoryIds.push(selectedCategoryId);
    this.selectedCategoryIds$.next(selectedCategoryIds);
    // console.log("from addSelectedCategoryId: " + selectedCategoryIds)
  }
  
  removeSelectedCategoryId(selectedCategoryId: number) {
    const selectedCategoryIds = this.selectedCategoryIds$.getValue();
    const removeCategoryIdx = selectedCategoryIds.findIndex(c => c == selectedCategoryId);
    if(removeCategoryIdx < 0)
    return;
    selectedCategoryIds.splice(removeCategoryIdx, 1);
    this.selectedCategoryIds$.next(selectedCategoryIds);
    // console.log("from remove SelectedCategoryId: " + selectedCategoryIds)
  }
}