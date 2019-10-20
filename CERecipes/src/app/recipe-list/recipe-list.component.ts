import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { RecipeComponent } from '../recipe-component/recipe-component.component';
import { Recipe } from '../interface/recipe';
import { Special } from '../interface/special';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[];
  
  constructor(
    private fetchService: FetchDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchService.getRecipeList().subscribe(resp => {
      this.recipeList = resp;
    }, error => {

    });
  }

  proceedToRecipe(recipeData) {
    this.router.navigate(['/recipes-list', recipeData.uuid])
  }

}
