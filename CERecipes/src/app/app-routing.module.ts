import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe-component/recipe-component.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipes-list', pathMatch: 'full'},
  { path: 'recipes-list', component: RecipeListComponent },
  { path: 'recipes-list/:id', component: RecipeComponent },
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
