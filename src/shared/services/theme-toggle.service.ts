import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' //ko cần import export ở shared module
})
export class ThemeToggleService {

    isDarkTheme$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    constructor() { }

    toggleTheme() { 
        const currentThemeState = this.isDarkTheme$.getValue();
        const nextThemeState = !currentThemeState;
        this.isDarkTheme$.next(nextThemeState);
    }
}
