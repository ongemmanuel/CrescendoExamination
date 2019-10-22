import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RecipeComponent } from './recipe-component/recipe-component.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeFormUpdateAddComponent } from './recipe-form-update-add/recipe-form-update-add.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MatNativeDateModule, MatDatepickerModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListComponent,
    PageNotFoundComponent,
    RecipeFormUpdateAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatNativeDateModule,
    MatDatepickerModule

  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [RecipeFormUpdateAddComponent]
})
export class AppModule { }
