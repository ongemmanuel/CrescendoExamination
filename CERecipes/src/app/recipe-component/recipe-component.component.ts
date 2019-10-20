import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';
import { Recipe } from '../interface/recipe';
import { Special } from '../interface/special';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-component',
  templateUrl: './recipe-component.component.html',
  styleUrls: ['./recipe-component.component.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;
  specials: Special[];
  isLoaded = false;
  msg: string;
  vals: string;
  constructor(
    private fetchData: FetchDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

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
      if (this.selectedRecipe) {
        this.isLoaded = true;
      } else {
        this.router.navigate(["**"]);
      }

    },
      error => {
        this.router.navigate(["**"]);
      });

  }

  getRecipeData(list, id): Recipe {
    return list.find(recipe => recipe.uuid === id);
  }

  checkSpecial(ingId) {
    let sp = this.specials.find(special => ingId === special.ingredientId);
    if (sp !== undefined) {
      if (sp.geo) {
        this.msg = '<span class="link-span">' + sp.title + ' (' + sp.type + ')' + ': ' + sp.text + '</span>';
        this.vals = sp.geo;
      } else {
        this.msg = '<span>' + sp.title + ' (' + sp.type + ')' + ': ' + sp.text + '</span>';
      }
    }

    return sp;
  }

  goToNewWindow(ingId) {
    let sp = this.specials.find(special => ingId === special.ingredientId);
    if (sp !== undefined) {
      if (sp.geo) {
        let url = "https://www.google.com.sa/maps/search/" + sp.geo;
        window.open(url, '_blank');
      } else {
        return null;
      }
    }
  }

}
