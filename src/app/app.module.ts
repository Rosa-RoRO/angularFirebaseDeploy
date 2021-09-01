import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { NewHouseComponent } from './components/new-house/new-house.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HouseDetailComponent,
    NewHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
