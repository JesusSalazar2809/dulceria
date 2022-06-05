import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent }  from './base/base.component';
import { HomeComponent }  from './home/home.component'
const routes: Routes = [
  { 
    path: '', 
    component: BaseComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }