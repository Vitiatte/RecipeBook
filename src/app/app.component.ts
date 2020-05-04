import { Component } from '@angular/core';
import {Selection} from './header/selection'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTabIndex = Selection.shopingList;

  getSelection() {
    return Selection;
  }
}
