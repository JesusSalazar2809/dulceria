import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandyComponent } from './addCandy/addCandy.component';
import { AddCategorieComponent } from './addCategorie/addCategorie.component';
import { EditCandyComponent } from './editCandy/editCandy.component';
import { EditCategorieComponent } from './editCategorie/editCategorie.component';
import { HomeComponent }  from './home/home.component';
import { ListCandyComponent } from './listCandy/listCandy.component';
import { ListCategorieComponent } from './listCategorie/listCategorie.component';

const routes: Routes = [
  {path:'addcandy', component: AddCandyComponent},
  {path:'addcategorie', component: AddCategorieComponent},
  {path:'listcandies', component: ListCandyComponent},
  {path:'listcategories', component: ListCategorieComponent},
  {path:'edit/candy/:id', component: EditCandyComponent},
  {path:'edit/categorie/:id', component: EditCategorieComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }