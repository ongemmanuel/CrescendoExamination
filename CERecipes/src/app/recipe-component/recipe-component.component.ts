import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';
import { Recipe } from '../interface/recipe';
import { Special } from '../interface/special';

@Component({
  selector: 'app-recipe-component',
  templateUrl: './recipe-component.component.html',
  styleUrls: ['./recipe-component.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;
  specials: Special[];
  isLoaded = false;
  msg: string;
  constructor(
    private fetchData: FetchDataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const recipeId = this.activatedRoute.snapshot.url[1].path;
    this.fetchData.getSpecialList().subscribe(resp => {
      this.specials = resp;
      console.log(resp);
    },
      error => {

      });

    this.fetchData.getRecipeList().subscribe(resp => {
      this.selectedRecipe = this.getRecipeData(resp, recipeId);
      this.isLoaded = true;
      console.log(this.selectedRecipe);
    },
      error => {

      });

  }

  getRecipeData(list, id): Recipe {
    return list.find(recipe => recipe.uuid === id);
  }

  checkSpecial(ingId) {
    let sp = this.specials.find(special => ingId === special.ingredientId);
    if(sp !== undefined) {
      this.msg = '<sub class="material-icons" style="display:inline">star</sub>' + sp.title + ' (' + sp.type + ')' + ': ' + sp.text ;
      this.msg = sp.title + ' (' + sp.type + ')' + ': ' + sp.text ;
     }
    return sp;
  }
}
