import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() chosenElement = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test1 name', 'Testcsdavsdvdv description',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg')
     , new Recipe('Test2 name', 'Test21312213 description',
     'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  choseElement(recipe: Recipe) {
    this.chosenElement.emit(recipe);
  }

}
