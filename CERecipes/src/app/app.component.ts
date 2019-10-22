import { Component } from '@angular/core';
import { RecipeFormUpdateAddComponent } from '../app/recipe-form-update-add/recipe-form-update-add.component';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crescendo Recipes';

  constructor(
    private recipeFormDialog: MatDialog
  ){}

  openRecipeForm(){
    console.log('OPEN RECIPE');


    // addCompany() {
      const recipeFormDialog = new MatDialogConfig();
      recipeFormDialog.disableClose = true;
      recipeFormDialog.autoFocus = false;
      const recDialog = this.recipeFormDialog.open(RecipeFormUpdateAddComponent, recipeFormDialog);
  
      // addDialog.afterOpened().subscribe(result => {
      // });
  
      recDialog.beforeClosed().subscribe(resp => {
        if (resp !== undefined && resp !== null && resp.ok) {
          console.log(resp);
          // this.loadData();
          // this.openSnackBar(resp.name + ' was successfully added.', 'CLOSE');
        }
      });
    // }

    
  }

  openSpecialForm(){
    console.log('OPEN SPECIAL');
  }

}
