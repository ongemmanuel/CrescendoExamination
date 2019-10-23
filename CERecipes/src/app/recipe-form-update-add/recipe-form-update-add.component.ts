import { Component, OnInit } from '@angular/core';
import { Recipe } from '../interface/recipe';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDatepicker } from '@angular/material';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-recipe-form-update-add',
  templateUrl: './recipe-form-update-add.component.html',
  styleUrls: ['./recipe-form-update-add.component.css']
})
export class RecipeFormUpdateAddComponent implements OnInit {
  recipeForm: FormGroup;
  recipe: Recipe;
  isReady = false;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RecipeFormUpdateAddComponent>,
    public dialog: MatDialog,
    private fetchService: FetchDataService
  ) { }

  ngOnInit() {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      servings: ['', Validators.required],
      prepTime: ['', Validators.required],
      cookTime: ['', Validators.required],
      postDate: ['', Validators.required],
      editDate: [''],
      images: this.fb.group({
        full: [''],
        medium: [''],
        small: ['']
      }),
      ingredients: this.getIngredientFormArr(),
      directions: this.getDirectionFormArr()
    });
    console.log(this.recipeForm.controls);
    this.isReady = true;
  }

  getIngredientFormArr(): FormArray {
    const ingredientArr = this.fb.array([]);
    ingredientArr.push(this.fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required],
      measurement: ['', Validators.required],
      uuid: [''],
    }));
    return ingredientArr;
  }

  getDirectionFormArr(): FormArray {
    const directionArr = this.fb.array([]);
    directionArr.push(this.fb.group({
      instructions: ['', Validators.required],
      optional: [''],
    }));
    return directionArr;
  }

  isFormControl(formType) {
    return formType.value instanceof FormControl;
  }

  isFormGroup(formType) {
    return formType.value instanceof FormGroup;
  }

  isFormArray(formType) {
    return formType.value instanceof FormArray;
  }

  isDate(key) {
    return key === 'postDate' || key === 'editDate';
  }

  //PREVENTS AUTO SORT
  returnZero() {
    return 0;
  }

  saveAdd(val) {
    this.fetchService.submitAdd(val).subscribe(resp => {
      console.log(resp);
    });
  }




}
