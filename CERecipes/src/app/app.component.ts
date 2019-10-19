import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material';
import { FetchDataService } from './fetch-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Crescendo Recipes';
  recipeList: string[];
  
  constructor(
    private fetchService: FetchDataService,
  ) {}

  ngOnInit() {
    this.fetchService.getRecipeList().subscribe(resp => {
      console.log(resp);
    }, error => {

    });
  }

}
