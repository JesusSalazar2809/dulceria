import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './base/base.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [		
    AppComponent,
    BaseComponent,
    AdminComponent,
    HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 
}
