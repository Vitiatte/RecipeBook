import { Component, Output, EventEmitter} from '@angular/core';
import { Selection } from './selection';

@Component({
    selector: 'app-header',
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
    collapsed = true;
    @Output() selectedTabIndex = new EventEmitter<number>();

    constructor() {
    }

    activateRecipies() {
        this.selectedTabIndex.emit(Selection.recipies);
        console.log("2");
    }

    activateShoppingList() {
        this.selectedTabIndex.emit(Selection.shopingList);
        console.log("1");
    }
}