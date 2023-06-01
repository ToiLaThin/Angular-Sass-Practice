import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caching-app';
  
  handleClick() {
    console.log('handleClick()');
  }

  resetLocalStorageAndReload() {
    window.localStorage.clear();
    window.location.reload();
  }
}


