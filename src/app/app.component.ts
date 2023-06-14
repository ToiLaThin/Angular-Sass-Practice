import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeToggleService } from 'src/shared/services/theme-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caching-app';
  isDarkTheme$!: Observable<boolean>;
  constructor(private toggleThemeService: ThemeToggleService) {
    this.isDarkTheme$ = this.toggleThemeService.isDarkTheme$;  
  }

  handleClick() {
    console.log('handleClick()');
  }

  resetLocalStorageAndReload() {
    window.localStorage.clear();
    window.location.reload();
  }
}


